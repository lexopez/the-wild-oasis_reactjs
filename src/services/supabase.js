import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://riiftzlywbcklgjotfax.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpaWZ0emx5d2Jja2xnam90ZmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxNzgxMjcsImV4cCI6MjA4Mjc1NDEyN30.uxyWq6uGU7vx5wgp1Hnv9Q-IsAbdbX6HhAka_6gf3J0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
