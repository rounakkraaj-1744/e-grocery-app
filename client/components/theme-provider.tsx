"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect } from "react"

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (!savedTheme) {
      localStorage.setItem("theme", "system")
    }
  }, [])
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}