"use client";
import { fallbackMovies } from "@/app/data/fallbackMovies";
import { useState, useEffect } from "react";
import { useNowPlayingMovies } from "@/app/hooks/useNowPlayingMovies";
import { useScreenSize } from "@/app/hooks/useScreenSize";
import MovieGridSkeleton from "@/app/skeleton/MovieGridSkeleton";
import MovieGrid from "@/app/components/movies/components/MovieGrid";
import ErrorMessage from "@/app/components/movies/components/ErrorMessage";
import Pagination from "@/app/components/movies/components/Pagination";
import { TMDBMovie } from "@/app/types/TMDBmovie";

export default function MovieList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { screenSize, moviesPerPage } = useScreenSize();

  // Use custom hook for now playing movies
  const {
    movies: nowPlayingMovies,
    isLoading,
    isError,
  } = useNowPlayingMovies(1);

  // Transform API data or fallback to mock data
  const movies = nowPlayingMovies
    ? nowPlayingMovies.map((movie: TMDBMovie) => ({
        id: movie.id.toString(),
        title: movie.title,
        image: `https://image.tmdb.org/t/p/w1280${movie.poster_path}`,
        description: movie.overview,
        rating: Math.ceil(movie.vote_average * 10) / 10,
      }))
    : isError
    ? fallbackMovies
    : [];

  const error = isError ? "Failed to load movies from TMDB API" : null;

  // Reset current page when screen size changes (to prevent out-of-bounds issues)
  useEffect(() => {
    setCurrentPage(1);
  }, [screenSize]);

  // Calculate pagination
  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <MovieGridSkeleton />;
  }

  return (
    <div className="h-full w-full max-w-[1440px] flex flex-col ">
      {/* API Status Message */}
      {error && <ErrorMessage error={error} />}

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
