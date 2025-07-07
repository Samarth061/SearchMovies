import { dummyCarouselItems } from "@/app/data/carouselData";
import MovieCard from "@/app/features/movies/components/MovieCard";
import React from "react";

export default function MovieList() {
  function getRandomBackgroundClass() {
    const bgClasses = [
      "bg-[var(--bg-primary)]",
      "bg-[var(--bg-secondary)]",
      "bg-[var(--bg-card)]",
      "bg-[var(--bg-elevated)]",
    ];

    const randomIndex = Math.floor(Math.random() * bgClasses.length);
    return bgClasses[randomIndex];
  }

  const bgClass = getRandomBackgroundClass();

  return (
    <div className="h-full w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {dummyCarouselItems.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          image={movie.image}
          className={bgClass}
        />
      ))}
    </div>
  );
}
