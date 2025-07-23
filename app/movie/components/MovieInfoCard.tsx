"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TMDBMovie } from "@/app/types/TMDBmovie";
import {
  FaClock,
  FaUser,
  FaPen,
  FaCalendar,
  FaCertificate,
} from "react-icons/fa";
import { useMovieCredits } from "@/app/hooks/movieHooks/useMovieCredits";
import { useMovieRating } from "@/app/hooks/movieHooks/useMovieRating";

interface MovieInfoCardProps {
  movie: TMDBMovie;
}

interface CrewMember {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  department: string;
  job: string;
  popularity: number;
  profile_path: string | null;
  gender: number | null;
  adult: boolean;
}

export default function MovieInfoCard({ movie }: MovieInfoCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const {
    crew,
    isLoading: isMovieCreditLoading,
    isError: isMovieCreditError,
  } = useMovieCredits(movie.id);
  const {
    certification,
    isLoading: isRatingLoading,
    isError: isRatingError,
  } = useMovieRating(movie.id);

  const isLoading = isMovieCreditLoading || isRatingLoading;
  const isError = isMovieCreditError || isRatingError;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const director: CrewMember | undefined = crew.find(
    (member: CrewMember) => member.job === "Director"
  );

  const writers: CrewMember[] = crew.filter(
    (member: CrewMember) =>
      member.job === "Writer" || member.job === "Screenplay"
  );
  const formatRuntime = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  const formatReleaseDate = (dateString?: string) => {
    if (!dateString) return "TBA";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDirectors = (director?: { name: string }) => {
    if (!director) return "N/A";
    return director.name;
  };
  const formatWriters = (writers?: { name: string }[]) => {
    if (!writers || writers.length === 0) return "N/A";
    return writers.map((writer) => writer.name).join(", ");
  };

  return (
    <div className="w-full max-w-sm mx-auto group">
      {/* 3D Flip Container */}
      <div
        className="relative w-full aspect-[2/3] cursor-pointer"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        role="button"
        aria-label={`View details for ${movie.title}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsFlipped(!isFlipped);
          }
        }}
      >
        {/* Card Inner Container */}
        <div
          className={`relative w-full h-full transition-transform duration-600 ease-in-out transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side - Movie Poster */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority
              />

              {/* Hover Hint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Rating Badge */}
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg">
                <div className="flex items-center gap-1">
                  <Image
                    src="/star-svgrepo-com.svg"
                    alt="Star"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-white text-sm font-bold">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Hover Hint Text */}
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <div className="bg-black/70 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">
                    Hover to see details
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side - Movie Info */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full">
              {/* Blurred Background */}
              <div className="absolute inset-0">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  className="object-cover blur-sm scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/70" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                {/* Title */}
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-6 line-clamp-2 leading-tight">
                    {movie.title}
                  </h3>
                </div>

                {/* Movie Details */}
                <div className="space-y-4">
                  {/* Runtime */}
                  <div className="flex items-center gap-3 text-white">
                    <FaClock className="w-4 h-4 text-semantic-accent-primary flex-shrink-0" />
                    <span className="text-sm font-medium">
                      {formatRuntime(movie.runtime)}
                    </span>
                  </div>

                  {/* Director */}
                  <div className="flex items-center gap-3 text-white">
                    <FaUser className="w-4 h-4 text-semantic-accent-primary flex-shrink-0" />
                    <span className="text-sm font-medium line-clamp-1">
                      {formatDirectors(director)}
                    </span>
                  </div>

                  {/* Writers */}
                  <div className="flex items-center gap-3 text-white">
                    <FaPen className="w-4 h-4 text-semantic-accent-primary flex-shrink-0" />
                    <span className="text-sm font-medium line-clamp-2">
                      {formatWriters(writers)}
                    </span>
                  </div>

                  {/* Certification */}
                  <div className="flex items-center gap-3 text-white">
                    <FaCertificate className="w-4 h-4 text-semantic-accent-primary flex-shrink-0" />
                    <span className="text-sm font-medium">
                      {certification || "Not Rated"}
                    </span>
                  </div>

                  {/* Release Date */}
                  <div className="flex items-center gap-3 text-white">
                    <FaCalendar className="w-4 h-4 text-semantic-accent-primary flex-shrink-0" />
                    <span className="text-sm font-medium">
                      {formatReleaseDate(movie.release_date)}
                    </span>
                  </div>
                </div>

                {/* Bottom spacing */}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
