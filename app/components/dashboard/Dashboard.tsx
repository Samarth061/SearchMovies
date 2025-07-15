"use client";

import MovieList from "@/app/components/movies/MovieList";
import { ActionMoviesCarousel } from "../movies/components/MovieCarousels";

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col md:flex-row h-full">
      <div className="flex-1 md:w-1/2">
        <ActionMoviesCarousel />
      </div>
      <div className="flex-1 md:w-1/2">
        <MovieList />
      </div>
    </div>
  );
}
