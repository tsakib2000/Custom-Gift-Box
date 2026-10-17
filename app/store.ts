import { create } from "zustand"
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

type ThemeState = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const useTheme = create<ThemeState>((set)=>({
theme: "light",
setTheme: (theme) => set({ theme })
}))

type AuthState = {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  signOut: () => Promise<void>;
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  signOut: async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    set({ user: null });
  },
}));
