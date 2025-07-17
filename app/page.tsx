"use client";
import SearchControls from "./components/layout/searchControls/SearchControls";
import { FeaturedMoviesCarousel } from "./components/movies/MovieCarousels";
import MovieList from "./components/movies/MovieGallery";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-1 w-full ">
        <FeaturedMoviesCarousel />
      </div>

      <div className="flex-1 w-full max-w-[1440px] mx-auto">
        <SearchControls />
        <MovieList />
      </div>
    </div>
  );
}
