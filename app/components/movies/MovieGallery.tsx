"use client";
import { fallbackMovies } from "@/app/data/fallbackMovies";
import { useState, useEffect } from "react";
import { useNowPlayingMovies } from "@/app/hooks/movieHooks/useNowPlayingMovies";
import { useBreakpoints } from "@/app/hooks/useBreakpoints";
import { usePagination } from "@/app/hooks/usePagination";
import MovieGridSkeleton from "@/app/components/movies/skeleton/MovieGridSkeleton";
import MovieGrid from "@/app/components/movies/components/MovieGrid";
import ErrorMessage from "@/app/components/movies/components/ErrorMessage";
import Pagination from "@/app/components/movies/components/Pagination";
import { TMDBMovie } from "@/app/types/TMDBmovie";
import { useMoviesByGenre } from "@/app/hooks/movieHooks/useMoviesByGenre";
import { useMoviesBySearch } from "@/app/hooks/movieHooks/useMoviesBySearch";

export default function MovieGallery({
  genreArray,
  searchValue,
  showMovies,
  setShowMovies,
}: any) {
  const [artificialLoading, setArtificialLoading] = useState(true);
  const { screenSize, getMoviesPerPage } = useBreakpoints();
  const moviesPerPage = getMoviesPerPage();

  // Simulate loading delay to show skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setArtificialLoading(false);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  // Use custom hook for now playing movies
  const {
    movies: nowPlayingMovies,
    isLoading: nowPlayingMoviesLoading,
    isError: nowPlayingMoviesError,
  } = useNowPlayingMovies(1); // Page 1

  const {
    data: genreFilterMovies,
    isLoading: genreFilterMoviesLoading,
    isError: genreFilterMoviesError,
  } = useMoviesByGenre(genreArray);

  const {
    search: searchMovies,
    isLoading: searchMoviesLoading,
    isError: searchMoviesError,
  } = useMoviesBySearch(searchValue);

  useEffect(() => {
    const rawMovies =
      searchMovies?.length > 0
        ? searchMovies
        : genreArray.length > 0
        ? genreFilterMovies || []
        : nowPlayingMovies || [];

    setShowMovies(rawMovies);
  }, [searchMovies, genreArray, genreFilterMovies, nowPlayingMovies]);

  const isLoading =
    artificialLoading ||
    nowPlayingMoviesLoading ||
    searchMoviesLoading ||
    genreFilterMoviesLoading;

  const isError =
    nowPlayingMoviesError || genreFilterMoviesError || searchMoviesError;
  const errorMessage = nowPlayingMoviesError
    ? "Failed to load movies from TMDB API"
    : genreFilterMoviesError
    ? "Failed to filter genres"
    : searchMoviesError
    ? "Failed to search movies"
    : null;

  const mapMovies =
    showMovies.length > 0
      ? showMovies.map((movie: TMDBMovie) => ({
          id: movie.id.toString(),
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w1280${movie.poster_path}`,
          description: movie.overview,
          rating: Math.ceil(movie.vote_average * 10) / 10,
        }))
      : isError
      ? fallbackMovies
      : [];

  // Use pagination hook
  const {
    currentPage,
    totalPages,
    currentItems: currentMovies,
    goToPage,
  } = usePagination({
    items: mapMovies,
    itemsPerPage: moviesPerPage,
    resetTrigger: screenSize,
  });

  if (isLoading) {
    return <MovieGridSkeleton />;
  }
  // console.log(showMovies);
  return (
    <div className="h-full w-full max-w-[1440px] flex flex-col ">
      {/* API Status Message */}
      {errorMessage && <ErrorMessage error={errorMessage} />}

      {/* Movie Grid */}
      <MovieGrid movies={currentMovies} />

      {/* Spacer to push pagination toward bottom */}
      <div className="flex-1"></div>

      {/* Fixed Pagination at Bottom */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  );
}
