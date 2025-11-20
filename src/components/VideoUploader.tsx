import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Upload, CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const VideoUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      if (!selectedFile.type.startsWith('video/')) {
        toast({
          title: 'Invalid file type',
          description: 'Please select a video file',
          variant: 'destructive',
        });
        return;
      }

      // Validate file size (100MB limit)
      const maxSize = 100 * 1024 * 1024; // 100MB in bytes
      if (selectedFile.size > maxSize) {
        toast({
          title: 'File too large',
          description: 'Please select a video file smaller than 100MB',
          variant: 'destructive',
        });
        return;
      }

      setFile(selectedFile);
      setUploadedUrl(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: 'No file selected',
        description: 'Please select a video file first',
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);

    try {
      // Generate unique filename with timestamp
      const timestamp = Date.now();
      const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const fileName = `${timestamp}-${sanitizedName}`;

      console.log('Requesting signed URL for:', fileName);

      // Step 1: Get signed upload URL from edge function
      const { data: urlData, error: urlError } = await supabase.functions.invoke('upload-url', {
        body: {
          bucket: 'videos',
          fileName,
          contentType: file.type,
        },
      });

      if (urlError) {
        console.error('Error getting signed URL:', urlError);
        throw new Error(urlError.message || 'Failed to get upload URL');
      }

      if (!urlData?.uploadUrl) {
        throw new Error('No upload URL returned');
      }

      console.log('Signed URL received, uploading file...');

      // Step 2: Upload file to signed URL using PUT
      const uploadResponse = await fetch(urlData.uploadUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
          'x-upsert': 'true', // Allow overwriting if file exists
        },
      });

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        console.error('Upload failed:', errorText);
        throw new Error(`Upload failed: ${uploadResponse.statusText}`);
      }

      console.log('Upload successful!');

      // Step 3: Set the public URL
      setUploadedUrl(urlData.publicUrl);

      toast({
        title: 'Upload successful!',
        description: 'Your video has been uploaded successfully',
      });

      // Reset file input
      setFile(null);
      const fileInput = document.getElementById('video-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: 'Upload failed',
        description: error instanceof Error ? error.message : 'An error occurred during upload',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="p-6 bg-gradient-primary card-glow">
      <div className="bg-card rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Upload Video</h3>
          <p className="text-muted-foreground">
            Select a video file (up to 100MB) to upload to storage
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <input
              id="video-input"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              disabled={uploading}
              className="flex-1 text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:cursor-pointer cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {file && (
            <div className="text-sm text-muted-foreground">
              Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </div>
          )}

          <Button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="w-full"
            size="lg"
          >
            {uploading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-5 h-5 mr-2" />
                Upload Video
              </>
            )}
          </Button>

          {uploadedUrl && (
            <div className="p-4 bg-accent rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">Upload Successful!</span>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground mb-2">Your video is available at:</p>
                <a
                  href={uploadedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  {uploadedUrl}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
