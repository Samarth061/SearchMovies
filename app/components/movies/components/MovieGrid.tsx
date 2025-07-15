import MovieCard from "@/app/components/movies/MovieCard";

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
  return (
    <div className="grid grid-cols-2 pt-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center auto-rows-fr">
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
