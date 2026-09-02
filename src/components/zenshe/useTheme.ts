import { useEffect, useState } from "react";

export const themes = [
  { id: "forest", label: "Forest & Linen" },
  { id: "moss", label: "Moss & Paper" },
  { id: "terracotta", label: "Terracotta Grove" },
  { id: "nocturne", label: "Nocturne" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

const STORAGE_KEY = "zenshe-theme";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeId>("forest");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (stored && themes.some((t) => t.id === stored)) setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return { theme, setTheme };
}
