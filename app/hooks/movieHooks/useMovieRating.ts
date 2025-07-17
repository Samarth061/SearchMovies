import useSWR from "swr";
import { getMovieReleaseData } from "../../lib/tmdb";

export function useMovieRating(id: number) {
  const { data, error, isLoading } = useSWR(["movieRating", id], () =>
    getMovieReleaseData(id)
  );

  const usRelease = data?.results?.find((r: any) => r.iso_3166_1 === "US");

  const certification = usRelease?.release_dates?.[0]?.certification || "NR"; // NR = Not Rated

  return {
    certification,
    isLoading,
    isError: error,
  };
}
