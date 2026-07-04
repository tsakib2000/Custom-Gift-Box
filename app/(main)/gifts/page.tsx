import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
interface Products{
  title: string,
  imageSrc: string,
  imageAlt: string

}

export default async function  page()  {
    const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: initialProducts } = await supabase.from("gifts").select().returns<Products[]>();
  
  return (
    <div>

    </div>
  )
}

