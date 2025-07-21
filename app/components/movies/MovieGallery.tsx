"use client";
import { fallbackMovies } from "@/app/data/fallbackMovies";
import { useState, useEffect } from "react";
import { useNowPlayingMovies } from "@/app/hooks/movieHooks/useNowPlayingMovies";
import { useBreakpoints } from "@/app/hooks/useBreakpoints";
import MovieGridSkeleton from "@/app/components/movies/skeleton/MovieGridSkeleton";
import MovieGrid from "@/app/components/movies/components/MovieGrid";
import ErrorMessage from "@/app/components/movies/components/ErrorMessage";
import Pagination from "@/app/components/movies/components/Pagination";
import { TMDBMovie } from "@/app/types/TMDBmovie";
import { useMoviesByGenre } from "@/app/hooks/movieHooks/useMoviesByGenre";

export default function MovieGallery({ genreArray }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [artificialLoading, setArtificialLoading] = useState(true);
  const { screenSize, getMoviesPerPage } = useBreakpoints();
  const moviesPerPage = getMoviesPerPage();

  // Simulate loading delay to show skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setArtificialLoading(false);
    }, 3000); // 2.5 second delay

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

  const isLoading =
    artificialLoading || nowPlayingMoviesLoading || genreFilterMoviesLoading;
  const isError = nowPlayingMoviesError || genreFilterMoviesError;
  const errorMessage = nowPlayingMoviesError
    ? "Failed to load movies from TMDB API"
    : genreFilterMoviesError
    ? "Failed to filter genres"
    : null;

  // Transform API data or fallback to mock data
  const rawMovies =
    genreArray.length > 0 ? genreFilterMovies || [] : nowPlayingMovies || [];

  const mapMovies =
    rawMovies.length > 0
      ? rawMovies.map((movie: TMDBMovie) => ({
          id: movie.id.toString(),
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w1280${movie.poster_path}`,
          description: movie.overview,
          rating: Math.ceil(movie.vote_average * 10) / 10,
        }))
      : isError
      ? fallbackMovies
      : [];

  // Reset current page when screen size changes (to prevent out-of-bounds issues)
  useEffect(() => {
    setCurrentPage(1);
  }, [screenSize]);

  // Calculate pagination
  const totalPages = Math.ceil(mapMovies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = mapMovies.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
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
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  );
}
