"use client";
import SearchControls from "./components/layout/SearchControls";
import { ActionMoviesCarousel } from "./components/movies/components/MovieCarousels";
import MovieList from "./components/movies/components/MovieList";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-1 w-full ">
        <ActionMoviesCarousel />
      </div>

      <div className="flex-1 w-full max-w-[1440px] mx-auto p-5">
        <SearchControls />
        <MovieList />
      </div>
    </div>
  );
}
