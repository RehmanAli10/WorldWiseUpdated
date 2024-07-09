import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hsxmldybxbyxxrelibbm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzeG1sZHlieGJ5eHhyZWxpYmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5MjAzMjIsImV4cCI6MjAzNTQ5NjMyMn0.kcP8svSopFll_mcxvypwZwm--k-JRQeHCEO2bBX1hMM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
