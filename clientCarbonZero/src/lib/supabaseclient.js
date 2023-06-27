import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPEBASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
