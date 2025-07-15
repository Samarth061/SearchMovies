"use client";
import { mockMovies } from "@/app/data/mockMovies";
import ReactPlayer from "react-player";
import Image from "next/image";
import { useMovieDetails } from "@/app/hooks/useMovieDetails";
import { useMovieTrailer } from "@/app/hooks/useMovieTrailer";
import ErrorMessage from "@/app/components/movies/components/ErrorMessage";
import { use } from "react";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

export default function MoviePage({ params }: MoviePageProps) {
  const { id } = use(params);
  const movieId = parseInt(id);
  
  const {
    movie: movieDetails,
    isLoading: movieLoading,
    isError: movieError,
  } = useMovieDetails(movieId);

  const {
    trailerKey,
    isLoading: trailerLoading,
    isError: trailerError,
  } = useMovieTrailer(movieDetails ? movieDetails.id : 0);

  // Find fallback movie from mock data
  const fallbackMovie = mockMovies.find((m) => m.id === id);

  // Transform single movie object (not array)
  const movie = movieDetails
    ? {
        id: movieDetails.id.toString(),
        title: movieDetails.title,
        image: `https://image.tmdb.org/t/p/w1280${movieDetails.poster_path}`,
        description: movieDetails.overview,
        rating: Math.ceil(movieDetails.vote_average * 10) / 10,
        trailerYouTubeId: trailerKey,
      }
    : movieError && fallbackMovie
    ? fallbackMovie
    : null;

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
            The movie you're looking for doesn't exist or couldn't be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1440px] flex mx-auto mt-3">
      {error && <ErrorMessage error={error} />}

      <Image
        src={movie.image}
        alt={movie.title}
        className="w-auto h-auto max-w-xl object-cover"
        width={400}
        height={600}
      />
      <div className="ml-6 flex flex-col">
        <h1 className="text-3xl font-bold text-semantic-accent-secondary">
          {movie.title}
          {movie.rating}
        </h1>
        <p className="mt-4 text-semantic-text-description">
          {movie.description}
        </p>
        {/* Trailer Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-semantic-text-primary mb-3">
            Trailer
          </h2>
          {trailerLoading ? (
            <div className="aspect-video w-full max-w-2xl bg-semantic-background-secondary rounded-lg flex items-center justify-center">
              <p className="text-semantic-text-secondary">Loading trailer...</p>
            </div>
          ) : movie.trailerYouTubeId ? (
            <div className="aspect-video w-full max-w-2xl">
              <ReactPlayer
                src={`https://www.youtube.com/watch?v=${movie.trailerYouTubeId}`}
                playing={false}
                controls
                width="100%"
                height="100%"
              />
            </div>
          ) : (
            <div className="aspect-video w-full max-w-2xl bg-semantic-background-secondary rounded-lg flex items-center justify-center">
              <p className="text-semantic-text-secondary">
                {trailerError ? "Failed to load trailer" : "No trailer available"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
