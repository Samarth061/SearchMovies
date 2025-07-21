"use client";
import { fallbackMovies } from "@/app/data/fallbackMovies";
import Image from "next/image";
import { useMovieDetails } from "@/app/hooks/movieHooks/useMovieDetails";
import { useMovieTrailer } from "@/app/hooks/movieHooks/useMovieTrailer";
import ErrorMessage from "@/app/components/movies/components/ErrorMessage";
import { use, useState } from "react";
import Cast from "../components/Cast";
import MovieTrailer from "../components/MovieTrailer";
import MovieDescription from "../components/MovieDescription";
import MovieRatingGenre from "../components/MovieRatingGenre";
import MovieInfoCard from "../components/MovieInfoCard";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

export default function MoviePage({ params }: MoviePageProps) {
  const { id } = use(params);
  const movieId = parseInt(id);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const {
    movie: movieDetails,
    isLoading: movieLoading,
    isError: movieError,
  } = useMovieDetails(movieId);

  const {
    trailerKey,
    isLoading: _trailerLoading,
    isError: _trailerError,
  } = useMovieTrailer(movieDetails ? movieDetails.id : 0);

  // Find fallback movie from fallback data
  const fallbackMovie = fallbackMovies.find((m) => m.id.toString() === id);

  // Use TMDBMovie directly
  const movie = movieDetails || (movieError && fallbackMovie) || null;

  const error = movieError ? "Failed to load movie from TMDB API" : null;

  // Loading state
  if (movieLoading) {
    return (
      <div className="w-full max-w-[1440px] flex mx-auto mt-3 items-center justify-center">
        <div className="text-center">
          <p className="text-semantic-text-secondary text-lg">
            Loading movie details...
          </p>
        </div>
      </div>
    );
  }

  // Error state with no fallback movie
  if (!movie) {
    return (
      <div className="w-full max-w-[1440px] flex mx-auto mt-3">
        <div className="text-center w-full">
          <h1 className="text-2xl font-bold text-semantic-text-primary mb-4">
            Movie Not Found
          </h1>
          <p className="text-semantic-text-secondary">
            The movie you&apos;re looking for doesn&apos;t exist or
            couldn&apos;t be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 pt-4 pb-4 flex flex-col items-center justify-start space-y-6">
      {error && <ErrorMessage error={error} />}

      <div className="relative w-full max-w-[1440px] mx-auto aspect-[4/3] sm:aspect-[3/2] md:aspect-video">
        <Image
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1440px"
          priority
        />
        <div className="absolute bottom-0 left-0 z-10 max-w-[1440px] w-full text-wrap item-center py-3 px-4 bg-semantic-background-primary/50 backdrop-blur-xl">
          <MovieRatingGenre movie={movie} />
          <MovieDescription
            movie={movie}
            isDescriptionExpanded={isDescriptionExpanded}
            setIsDescriptionExpanded={setIsDescriptionExpanded}
          />
        </div>
      </div>

      {/* Movie Info Card and Trailer Side by Side */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center pt-2">
        {/* Movie Info Card */}
        <div className="w-full md:w-5/12 lg:w-1/3 flex justify-center md:justify-start">
          <div className="w-full max-w-xs md:max-w-none">
            <MovieInfoCard movie={movie} />
          </div>
        </div>

        {/* Movie Trailer */}
        <div className="w-full md:w-7/12 lg:w-2/3 flex items-start">
          <div className="w-full">
            <MovieTrailer trailerKey={trailerKey} />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto">
        <Cast id={movie.id} />
      </div>
    </div>
  );
}
