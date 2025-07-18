"use client";
import { useState, useEffect } from "react";

export type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

// Tailwind CSS breakpoints (matching default Tailwind config)
const BREAKPOINTS = {
  xs: 0,    // Mobile small
  sm: 640,  // Mobile large 
  md: 768,  // Tablet
  lg: 1024, // Desktop small
  xl: 1280, // Desktop large
  "2xl": 1536, // Desktop extra large
} as const;

export function useBreakpoints() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    
    // Set initial width
    updateWidth();
    
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Get current screen size category
  const getScreenSize = (): ScreenSize => {
    if (width < BREAKPOINTS.sm) return "xs";
    if (width < BREAKPOINTS.md) return "sm"; 
    if (width < BREAKPOINTS.lg) return "md";
    if (width < BREAKPOINTS.xl) return "lg";
    return "xl";
  };

  const screenSize = getScreenSize();

  // Boolean breakpoint helpers
  const breakpoints = {
    isXs: screenSize === "xs",
    isSm: screenSize === "sm", 
    isMd: screenSize === "md",
    isLg: screenSize === "lg",
    isXl: screenSize === "xl",
    
    // Legacy compatibility
    isMobile: width < BREAKPOINTS.md,
    isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
    isDesktop: width >= BREAKPOINTS.lg,
    
    // Range helpers
    isSmallScreen: width < BREAKPOINTS.lg, // xs, sm, md
    isLargeScreen: width >= BREAKPOINTS.lg, // lg, xl, 2xl
  };

  // Utility functions for common responsive patterns
  const utils = {
    // Grid columns based on screen size
    getGridCols: () => {
      const colMap: { [key in ScreenSize]: number } = {
        xs: 2,
        sm: 2, 
        md: 4,
        lg: 4,
        xl: 4,
      };
      return colMap[screenSize];
    },

    // Movies per page (2 rows of grid)
    getMoviesPerPage: () => {
      const colsPerRow = utils.getGridCols();
      return colsPerRow * 2; // 2 rows
    },

    // Text size classes
    getTextSize: (base: string = "text-base") => {
      const sizeMap: { [key in ScreenSize]: string } = {
        xs: `text-sm`,
        sm: `text-sm`,
        md: `text-base`, 
        lg: `text-lg`,
        xl: `text-xl`,
      };
      return sizeMap[screenSize] || base;
    },

    // Spacing utilities
    getSpacing: (base: number = 4) => {
      const multiplier = breakpoints.isMobile ? 0.75 : breakpoints.isTablet ? 1 : 1.25;
      return Math.round(base * multiplier);
    },

    // Check if width matches breakpoint
    isAtLeast: (breakpoint: keyof typeof BREAKPOINTS) => {
      return width >= BREAKPOINTS[breakpoint];
    },
    
    isBelow: (breakpoint: keyof typeof BREAKPOINTS) => {
      return width < BREAKPOINTS[breakpoint];
    },
  };

  return {
    // Core values
    width,
    screenSize,
    
    // Boolean breakpoints
    ...breakpoints,
    
    // Utility functions
    ...utils,
    
    // Constants for reference
    breakpoints: BREAKPOINTS,
  };
}
