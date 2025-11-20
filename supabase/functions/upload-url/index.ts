import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { bucket, fileName, contentType } = await req.json();

    if (!bucket || !fileName || !contentType) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: bucket, fileName, contentType' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Generating signed URL for:', { bucket, fileName, contentType });

    // Initialize Supabase client with service role key for admin access
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Generate signed upload URL (valid for 1 hour)
    const { data: uploadData, error: uploadError } = await supabase
      .storage
      .from(bucket)
      .createSignedUploadUrl(fileName);

    if (uploadError) {
      console.error('Error creating signed upload URL:', uploadError);
      return new Response(
        JSON.stringify({ error: uploadError.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Construct public URL
    const publicUrl = `${supabaseUrl}/storage/v1/object/public/${bucket}/${fileName}`;

    console.log('Signed URL generated successfully:', { uploadUrl: uploadData.signedUrl, publicUrl });

    return new Response(
      JSON.stringify({
        uploadUrl: uploadData.signedUrl,
        publicUrl,
        token: uploadData.token,
        path: uploadData.path
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in upload-url function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
