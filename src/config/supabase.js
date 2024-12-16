import { createClient } from '@supabase/supabase-js';
import { config } from './index.js';

const { url, anonKey } = config.supabase;

if (!url || !anonKey) {
  throw new Error('Missing Supabase credentials. Please check your .env file');
}

export const supabase = createClient(url, anonKey);