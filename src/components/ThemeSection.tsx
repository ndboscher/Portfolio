"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeSectionProps {
  children: React.ReactNode;
  sectionId: string;
  defaultTheme: "light" | "dark";
}

export function ThemeSection({
  children,
  sectionId,
  defaultTheme,
}: ThemeSectionProps) {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="bg-background">{children}</div>; // Render default background on initial load
  }

  const isDark = theme === "dark";
  let sectionClassName = "";

  // Define alternating themes based on sectionId and current theme
  switch (sectionId) {
    case "about":
    case "education":
    case "projects":
    case "contact":
      sectionClassName = isDark ? "bg-secondary" : "bg-background";
      break;
    case "work":
    case "skills":
    case "hackathons":
      sectionClassName = isDark ? "bg-background" : "bg-secondary";
      break;
    default:
      sectionClassName = "bg-background"; // Fallback
  }

  return <div className={sectionClassName}>{children}</div>;
}
