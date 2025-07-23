"use client";
import SearchControls from "./components/layout/searchControls/SearchControls";
import { FeaturedMoviesCarousel } from "./components/movies/MovieCarousels";
import MovieGallery from "./components/movies/MovieGallery";
import { useMovieFilters } from "./contexts/MovieFiltersContext";

export default function HomePage() {
  const {
    rawMovies,
    setRawMovies,
    showMovies,
    setShowMovies,
    genreArray,
    setGenreArray,
    searchValue,
    setSearchValue,
  } = useMovieFilters();

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
        />
        <MovieGallery
          rawMovies={rawMovies}
          setRawMovies={setRawMovies}
          showMovies={showMovies}
          setShowMovies={setShowMovies}
          genreArray={genreArray}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
}
