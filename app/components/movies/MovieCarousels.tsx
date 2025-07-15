"use client";
import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import {
  fallbackCarouselItems,
  featuredBackdropCarousel,
  getBackdropCarousel,
} from "../../data/carouselData";
import { CarouselItem } from "./components/Carousel";

export function FeaturedMoviesCarousel() {
  const [items, setItems] = useState<CarouselItem[]>(featuredBackdropCarousel);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        console.log("Attempting to load movies from TMDB API...");
        const apiItems = await getBackdropCarousel();
        console.log("Successfully loaded movies:", apiItems.length);
        setItems(apiItems);
        setError(null);
      } catch (err) {
        console.error("Failed to load movies from API, using fallback:", err);
        setError(err instanceof Error ? err.message : "Failed to load movies");
        setItems(featuredBackdropCarousel);
      } finally {
        setIsLoading(false);
      }
    }

    loadMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full flex-1 flex flex-col">
        <div className="flex-1 p-3 md:p-2 flex items-center justify-center">
          <div className="w-full max-w-[1440px] mx-auto aspect-video bg-semantic-background-secondary rounded-lg flex items-center justify-center">
            <p className="text-semantic-text-secondary">
              Loading featured movies...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex-1 flex flex-col">
      {error && (
        <div className="text-center p-2">
          <p className="text-semantic-text-secondary text-sm">
            Using fallback movies (API: {error})
          </p>
        </div>
      )}
      <div className="flex-1 p-3 md:p-2 flex items-center justify-center">
        <div className="w-full max-w-[1440px] mx-auto aspect-video">
          <Carousel
            items={items}
            autoPlay={true}
            showIndicators={true}
            showControls={true}
          />
        </div>
      </div>
    </div>
  );
}

export function FallbackCarousel() {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-2xl font-bold text-semantic-text-primary mb-4">
        Fallback Carousel
      </h2>
      <div className="flex-1 p-3 md:p-2 flex items-center justify-center">
        <div className="w-full max-w-[1440px] mx-auto aspect-video">
          <Carousel
            items={fallbackCarouselItems}
            autoPlay={true}
            showIndicators={true}
            showControls={true}
          />
        </div>
      </div>
    </div>
  );
}
