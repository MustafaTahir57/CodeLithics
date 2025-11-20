-- Update videos bucket to allow larger file uploads (500MB limit)
UPDATE storage.buckets 
SET file_size_limit = 524288000 
WHERE id = 'videos';

-- If bucket doesn't exist, create it with the size limit
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('videos', 'videos', true, 524288000)
ON CONFLICT (id) DO UPDATE
SET file_size_limit = 524288000;