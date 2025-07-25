import { useMovieCredits } from "@/app/hooks/movieHooks/useMovieCredits";
import React from "react";
import Image from "next/image";
import ScrollableContainer from "@/app/components/ui/ScrollableContainer";

export interface ActorProps {
  id: number;
  name: string;
  original_name: string;
  character: string;
  profile_path: string | null;
  credit_id: string;
  gender: number | null;
  popularity: number;
  known_for_department: string;
  order: number;
  adult: boolean;
}
export default function Cast({ id }: { id: number }) {
  const { cast, isLoading, isError } = useMovieCredits(id);

  if (isLoading) {
    return (
      <div className="w-full p-4">
        <h2 className="text-xl font-bold text-semantic-accent-secondary mb-4">
          Cast
        </h2>
        <p className="text-semantic-text-secondary">Loading cast...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full p-4">
        <h2 className="text-xl font-bold text-semantic-accent-secondary mb-4">
          Cast
        </h2>
        <p className="text-semantic-text-secondary">
          Failed to load cast information.
        </p>
      </div>
    );
  }

  if (!cast || cast.length === 0) {
    return (
      <div className="w-full p-4">
        <h2 className="text-xl font-bold text-semantic-accent-secondary mb-4">
          Cast
        </h2>
        <p className="text-semantic-text-secondary">
          No cast information available.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full p-2">
      <h2 className="text-3xl font-bold text-semantic-accent-primary mb-4">
        Cast
      </h2>
      <ScrollableContainer
        scrollDistance={200}
        containerClassName="flex w-full justify-between scroll-smooth overflow-hidden"
        gap="gap-4"
        padding="px-4"
        ariaLabel="Movie cast members"
      >
        {cast.slice(0, 8).map((actor: ActorProps) => (
          <div key={actor.id} className=" text-center flex-shrink-0">
            <div className="relative w-30 h-30 mx-auto mb-2">
              <Image
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : "/placeholder-avatar.png"
                }
                alt={actor.name}
                fill
                className="object-cover rounded-full border-2 border-semantic-accent-hot"
                sizes="80px"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/placeholder-avatar.png";
                }}
              />
            </div>
            <p className="text-md font-medium text-semantic-text-description truncate">
              {actor.name}
            </p>
            <p className="text-s text-semantic-accent-warm truncate">
              {actor.character}
            </p>
          </div>
        ))}
      </ScrollableContainer>
    </div>
  );
}
