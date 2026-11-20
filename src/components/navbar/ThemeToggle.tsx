"use client";

import { Moon, Sun } from "lucide-react";
import { themeStorageKey } from "@/lib/theme";

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const theme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = theme;

    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // The current page can still switch themes when storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid size-10 shrink-0 place-items-center rounded-full border border-foreground/20 text-foreground hover:bg-foreground/10"
    >
      <span className="theme-to-light">
        <Sun className="size-5" aria-hidden="true" />
        <span className="sr-only">Switch to light mode</span>
      </span>
      <span className="theme-to-dark">
        <Moon className="size-5" aria-hidden="true" />
        <span className="sr-only">Switch to dark mode</span>
      </span>
    </button>
  );
}
