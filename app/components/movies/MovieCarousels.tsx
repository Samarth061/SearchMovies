"use client";
import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import {
  fallbackCarouselItems,
  featuredBackdropCarousel,
  getBackdropCarousel,
} from "../../data/carouselData";
import { useTopRatedMovies } from "@/app/hooks/useTopRatedMovies";
import { CarouselItem } from "@/app/types/carouselMovie";
import { TMDBMovie } from "@/app/types/TMDBmovie";

export function FeaturedMoviesCarousel() {
  const {
    movies: topRatedMovies,
    isLoading,
    isError: error,
  } = useTopRatedMovies(3, 10);

  const movies: CarouselItem[] = topRatedMovies
    ? topRatedMovies.map((movie: TMDBMovie) => {
        // Use backdrop_path for carousels, fallback to poster_path, then to placeholder
        const imagePath = movie.backdrop_path || movie.poster_path;
        const imageUrl = imagePath
          ? `https://image.tmdb.org/t/p/w1280${imagePath}`
          : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"; // Fallback for missing images

        return {
          id: movie.id.toString(),
          title: movie.title || "Unknown Title",
          image: imageUrl,
          description: movie.overview || "No description available",
          rating: movie.vote_average
            ? Math.ceil(movie.vote_average * 10) / 10
            : 0,
          trailerYouTubeId: undefined, // Remove hardcoded trailer - should be fetched separately
        };
      })
    : fallbackCarouselItems;

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
            Using fallback movies (API:{" "}
            {error?.message || "Failed to load top rated movies"})
          </p>
        </div>
      )}
      <div className="flex-1 p-3 md:p-2 flex items-center justify-center">
        <div className="w-full max-w-[1440px] mx-auto aspect-video">
          <Carousel
            items={movies}
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
