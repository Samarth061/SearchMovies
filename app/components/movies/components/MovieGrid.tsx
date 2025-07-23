"use client";
import MovieCard from "@/app/components/movies/MovieCard";
import { useBreakpoints } from "@/app/hooks/useBreakpoints";

interface Movie {
  id: string;
  title: string;
  image: string;
  description: string;
  rating?: number;
  trailerYouTubeId?: string;
}

interface MovieGridProps {
  movies: Movie[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
  const { screenSize, isMobile } = useBreakpoints();

  // Map screen sizes to Tailwind grid classes
  const getGridClass = () => {
    switch (screenSize) {
      case "xs":
      case "sm":
        return "grid-cols-2";
      case "md":
      case "lg":
      case "xl":
      default:
        return "grid-cols-4";
    }
  };

  const gridClass = getGridClass();
  const gapClass = isMobile ? "gap-4" : "gap-6";

  return (
    <div
      className={`grid ${gridClass} pt-3 ${gapClass} justify-items-center auto-rows-fr transition-opacity duration-500 ease-in opacity-0 animate-fade-in`}
    >
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          id={parseInt(movie.id)}
          title={movie.title}
          image={movie.image}
          description={movie.description}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}
