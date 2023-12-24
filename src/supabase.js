import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://egyrgriqufhqabdnnczy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVneXJncmlxdWZocWFiZG5uY3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzMjQ2MzUsImV4cCI6MjAxODkwMDYzNX0.8Bvd1IcV7C0CGUedvBP9advGSxhzvAtapHNM0YBBws8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;