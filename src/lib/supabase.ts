import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables:", {
    url: supabaseUrl ? "present" : "missing",
    key: supabaseKey ? "present" : "missing",
  });
  throw new Error(
    "Missing Supabase environment variables. Check your .env.local file."
  );
}

export const createClient = () => createBrowserClient(supabaseUrl, supabaseKey);
