"use client";

import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useAuth } from "@/app/store";

export default function AuthListener() {
  useEffect(() => {
    const supabase = createClient();
    let mounted = true;

    supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return;
      useAuth.getState().setUser(data.user);
      useAuth.getState().setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      useAuth.getState().setUser(session?.user ?? null);
      useAuth.getState().setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return null;
}
