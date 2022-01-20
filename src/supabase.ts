import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

export default createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
