"use client";
import { useEffect, useState } from "react";
import SearchControls from "./components/layout/searchControls/SearchControls";
import { FeaturedMoviesCarousel } from "./components/movies/MovieCarousels";
import MovieList from "./components/movies/MovieGallery";

export default function HomePage() {
  const [duration, setDuration] = useState(120);
  const [rating, setRating] = useState(0);
  const [showMovies, setShowMovies] = useState(false);
  const [genre, setGenre] = useState([]);

  // useEffect(() => {
  //   // Fetch movie data based on the selected filters
  //   // ...
  // }, [duration, rating, showMovies]);

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
