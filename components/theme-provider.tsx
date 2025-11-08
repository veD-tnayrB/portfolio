"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface IThemeProviderProps extends ThemeProviderProps {}

export function ThemeProvider({ children, ...props }: IThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
