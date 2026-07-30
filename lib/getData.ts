import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const getData = async <T>(params: string): Promise<T[]> => {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

   const { data: gifts, error } = await supabase.from(params).select();

  if (error) {
    console.error(error);
    return [];
  }

  return gifts ?? [];
};

export default getData;