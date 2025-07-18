import React from "react";
import { TMDBMovie } from "@/app/types/TMDBmovie";
import ScrollableContainer from "@/app/components/ui/ScrollableContainer";

interface MovieRatingGenreProps {
  movie: TMDBMovie;
}

export default function MovieRatingGenre({ movie }: MovieRatingGenreProps) {
  return (
    <div>
      <h1 className="flex text-2xl sm:text-3xl lg:text-4xl font-bold text-semantic-text-description py-1">
        {movie.title}
      </h1>

      {/* Rating and Genre Section - Combined */}
      <div className="py-2 flex items-center gap-4">
        {/* Rating Section */}
        <div className="flex items-center flex-shrink-0">
          <svg
            className="w-8 h-8 text-yellow-400 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-semantic-text-description text-2xl">
            {Math.ceil(movie.vote_average * 10) / 10}
          </span>
        </div>

        {/* Genre Section */}
        {movie.genres && movie.genres.length > 0 && (
          <ScrollableContainer
            scrollDistance={150}
            gap="gap-3"
            ariaLabel="Movie genres"
          >
            {movie.genres.map((genre: { id: number; name: string }) => (
              <button
                key={genre.id}
                className="text-semantic-text-description text-lg rounded-lg px-2 py-1 bg-semantic-accent-secondary hover:bg-semantic-accent-secondary/80 whitespace-nowrap flex-shrink-0"
              >
                {genre.name}
              </button>
            ))}
          </ScrollableContainer>
        )}
      </div>
    </div>
  );
}
