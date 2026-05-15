import { createClient } from "@/lib/supabase/client"

const supabase = createClient()
const data = await supabase.auth.getUser();


export async function getUser() {
  return data;
}