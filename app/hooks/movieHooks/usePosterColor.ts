import { useEffect, useState } from "react";
import ColorThief from "color-thief-browser";

export function usePosterGradient(imageUrl: string) {
  const [gradientColors, setGradientColors] = useState<string[] | null>(null);

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    img.onload = async () => {
      try {
        const palette = await ColorThief.getPalette(img, 3); // Top 3 colors
        const colorStrings = palette.map(
          ([r, g, b]) => `rgb(${r}, ${g}, ${b})`
        );
        setGradientColors(colorStrings);
      } catch (err) {
        console.error("Failed to get palette:", err);
      }
    };
  }, [imageUrl]);

  return gradientColors;
}
