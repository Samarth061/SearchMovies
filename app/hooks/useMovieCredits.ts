import useSWR from "swr";
import { getMovieCredits } from "../lib/tmdb";

export function useMovieCredits(id: number) {
  const { data, error, isLoading } = useSWR(["movieCast", id], () =>
    getMovieCredits(id)
  );

  return {
    cast: data?.cast || [],
    crew: data?.crew || [],
    isLoading,
    isError: error,
  };
}
