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

interface MovieGalleryProps {
  rawMovies: TMDBMovie[];
  setRawMovies: React.Dispatch<React.SetStateAction<TMDBMovie[]>>;
  showMovies: TMDBMovie[];
  setShowMovies: React.Dispatch<React.SetStateAction<TMDBMovie[]>>;
  genreArray: number[];
  searchValue: string;
}

export default function MovieGallery({
  rawMovies,
  setRawMovies,
  showMovies,
  setShowMovies,
  genreArray,
  searchValue,
}: MovieGalleryProps) {
  const [artificialLoading, setArtificialLoading] = useState(true);
  const [apiPage, setApiPage] = useState(1);
  const { screenSize } = useBreakpoints();

  // Simulate loading delay to show skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setArtificialLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  // Use custom hook for now playing movies
  const {
    movies: nowPlayingMovies,
    isLoading: nowPlayingMoviesLoading,
    isError: nowPlayingMoviesError,
  } = useNowPlayingMovies(apiPage);

  const {
    data: genreFilterMovies,
    isLoading: genreFilterMoviesLoading,
    isError: genreFilterMoviesError,
  } = useMoviesByGenre(genreArray, apiPage);

  const {
    search: searchMovies,
    isLoading: searchMoviesLoading,
    isError: searchMoviesError,
  } = useMoviesBySearch(searchValue, apiPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setApiPage(1);
  }, [genreArray, searchValue]);

  useEffect(() => {
    const activeData = searchMovies || genreFilterMovies || nowPlayingMovies;
    const newRawMovies = activeData?.results || [];

    setRawMovies(newRawMovies);
  }, [setRawMovies, searchMovies, genreFilterMovies, nowPlayingMovies]);

  useEffect(() => {
    setShowMovies(rawMovies);
  }, [setShowMovies, rawMovies]);

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
      ? fallbackMovies.map((movie: TMDBMovie) => ({
          id: movie.id.toString(),
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w1280${movie.poster_path}`,
          description: movie.overview,
          rating: Math.ceil(movie.vote_average * 10) / 10,
        }))
      : [];
  // Get total pages from active API response
  const activeData = searchMovies || genreFilterMovies || nowPlayingMovies;
  const totalPages = activeData?.totalPages || 1;

  // Use pagination hook
  const {
    currentPage,
    totalPages: paginationTotalPages,
    currentItems: currentMovies,
    goToPage,
  } = usePagination({
    items: mapMovies,
    totalPages,
    currentPage: apiPage,
    onPageChange: setApiPage,
    resetTrigger: screenSize,
  });

  if (isLoading || !mapMovies) {
    return <MovieGridSkeleton />;
  }

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
        totalPages={paginationTotalPages}
        onPageChange={goToPage}
      />
    </div>
  );
}
