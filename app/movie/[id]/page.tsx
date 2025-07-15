import { notFound } from "next/navigation";
import { mockMovies } from "@/app/data/mockMovies";
import ReactPlayer from "react-player";
import { fetchFromTMDB } from "@/app/lib/tmdb";

export default async function MoviePage(props: { params: { id: string } }) {
  // ✅ force await to satisfy Next.js
  const { id } = await Promise.resolve(props.params);
  const data = await fetchFromTMDB(`/movie/${id}`);
  const movie = mockMovies.find((m) => m.id === id);

  if (!movie) return notFound();

  return (
    <div className="w-full max-w-[1440px] flex mx-auto mt-3">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-auto h-auto max-w-xl object-cover"
      />
      <div className="ml-6 flex flex-col">
        <h1 className="text-3xl font-bold text-semantic-accent-secondary">
          {movie.title}
        </h1>
        <p className="mt-4 text-semantic-text-description">
          {movie.description}
        </p>
        <div className="aspect-video w-full max-w-2xl">
          <ReactPlayer
            src={`https://www.youtube.com/watch?v=${movie.trailerYouTubeId}`}
            playing={false}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
