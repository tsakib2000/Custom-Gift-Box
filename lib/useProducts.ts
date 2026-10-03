import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  category: string;
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("gifts")
        .select("*")
        .returns<Product[]>();

      if (error) throw error;
      return data ?? [];
    },
  });
}