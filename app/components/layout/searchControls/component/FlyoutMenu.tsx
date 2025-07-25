"use client";

import React from "react";
import Slider from "./Slider";
import { TMDBMovie } from "@/app/types/TMDBmovie";

interface FlyoutMenuProps {
  rawMovies: TMDBMovie[];
  setShowMovies: React.Dispatch<React.SetStateAction<TMDBMovie[]>>;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

export default function FlyoutMenu({
  rawMovies,
  setShowMovies,
  setRating,
}: FlyoutMenuProps) {
  // const minDuration = 60;
  // const maxDuration = 240;

  function filterMovieByRating(rating: number) {
    setRating(rating);
    const filteredMovies = rawMovies.filter(
      (movie: TMDBMovie) => movie.vote_average >= rating
    );
    setShowMovies(filteredMovies);
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Duration Slider */}
      {/* <div className="w-full">
        <Slider
          htmlFor={"duration-slider"}
          title="Duration"
          min={minDuration}
          max={maxDuration}
          step={15}
          unit="min"
        />
      </div> */}

      {/* Rating Slider */}
      <div className="w-full">
        <Slider
          htmlFor={"rating-slider"}
          title="Rating"
          min={0}
          max={10}
          step={0.1}
          handleSliderChange={filterMovieByRating}
          unit=""
        />
      </div>

      {/* Show Movies */}
      {/* <div className="w-full">
        <ShowMovies />
      </div> */}
    </div>
  );
}
