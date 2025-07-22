"use client";
import { useState } from "react";
import SearchControls from "./components/layout/searchControls/SearchControls";
import { FeaturedMoviesCarousel } from "./components/movies/MovieCarousels";
import MovieGallery from "./components/movies/MovieGallery";

export default function HomePage() {
  const [duration, setDuration] = useState(120);
  const [rating, setRating] = useState(0);
  // stores movies in TMDB API format not TMDB format
  const [showMovies, setShowMovies] = useState([]);
  const [genreArray, setGenreArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-1 w-full ">
        <FeaturedMoviesCarousel />
      </div>

      <div className="flex-1 w-full max-w-[1440px] mx-auto">
        <SearchControls
          genreArray={genreArray}
          setGenreArray={setGenreArray}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          showMovies={showMovies}
          setShowMovies={setShowMovies}
        />
        <MovieGallery
          genreArray={genreArray}
          searchValue={searchValue}
          showMovies={showMovies}
          setShowMovies={setShowMovies}
        />
      </div>
    </div>
  );
}
