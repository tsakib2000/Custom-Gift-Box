import { create } from "zustand"
type ThemeState = {
  theme: string;
  setTheme: (theme: string) => void;
};
export const useTheme = create<ThemeState>((set)=>({
theme: "light",
setTheme: (theme: string) => set({ theme })
}))