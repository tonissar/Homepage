import { supabase } from '../lib/supabase';

export async function getImageUrl(path: string, bucket: string = 'website-images') {
  if (!path) {
    throw new Error('Image path is required');
  }

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);
  
  if (!data?.publicUrl) {
    throw new Error(`Failed to get public URL for ${path}`);
  }

  return data.publicUrl;
}