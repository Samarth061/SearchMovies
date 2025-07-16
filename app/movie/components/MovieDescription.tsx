import React from "react";
import { TMDBMovie } from "@/app/types/TMDBmovie";

interface MovieDescriptionProps {
  movie: TMDBMovie;
  isDescriptionExpanded: boolean;
  setIsDescriptionExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MovieDescription({
  movie,
  isDescriptionExpanded,
  setIsDescriptionExpanded,
}: MovieDescriptionProps) {
  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };
  return (
    <div>
      <p className="text-sm lg:text-base text-semantic-text-description text-left leading-relaxed my-1 md:text-wrap">
        <span className="md:hidden">
          {isDescriptionExpanded
            ? movie.overview
            : truncateText(movie.overview)}
        </span>
        <span className="hidden md:inline">{movie.overview}</span>
      </p>
      {movie.overview && movie.overview.length > 150 && (
        <button
          onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
          className="md:hidden inline-flex items-center gap-1 text-semantic-accent-primary hover:text-semantic-accent-secondary text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-semantic-accent-primary/20 rounded-md px-2 py-1"
        >
          <span>{isDescriptionExpanded ? "Read Less" : "Read All"}</span>
          <svg
            className={`w-4 h-4 transform transition-transform duration-200 ${
              isDescriptionExpanded ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
