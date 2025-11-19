-- Create a storage bucket for videos
INSERT INTO storage.buckets (id, name)
VALUES ('videos', 'videos');

-- Create policy to allow anyone to view videos
CREATE POLICY "Public video access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'videos');

-- Create policy to allow video uploads
CREATE POLICY "Allow video uploads"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'videos');