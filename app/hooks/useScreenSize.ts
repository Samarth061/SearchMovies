"use client";
import { useState, useEffect } from "react";

export type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("lg");

  useEffect(() => {
    const getScreenSize = (width: number): ScreenSize => {
      if (width < 640) return "xs"; // Mobile - 2 cols
      if (width < 768) return "sm"; // Small - 3 cols
      if (width < 1024) return "md"; // Medium - 4 cols
      if (width < 1400) return "lg"; // Large - 5 cols
      return "xl"; // Extra Large - 6 cols
    };

    const handleResize = () => {
      setScreenSize(getScreenSize(window.innerWidth));
    };

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamic movies per page based on screen size (2 rows)
  const getMoviesPerPage = (): number => {
    const columnMap: { [key in ScreenSize]: number } = {
      xs: 4, // 2 cols × 2 rows
      sm: 6, // 2 cols × 3 rows
      md: 8, // 4 cols × 2 rows
      lg: 8, // 4 cols × 2 rows
      xl: 8, // 4 cols × 2 rows
    };
    return columnMap[screenSize] || 4;
  };

  return {
    screenSize,
    moviesPerPage: getMoviesPerPage(),
  };
}