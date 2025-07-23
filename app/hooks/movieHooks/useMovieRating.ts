import useSWR from "swr";
import { getMovieReleaseData } from "../../lib/tmdb";

interface ReleaseDate {
  certification: string;
  iso_639_1: string | null;
  release_date: string;
  type: number;
  note?: string;
}
interface RegionReleaseInfo {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export function useMovieRating(id: number) {
  const { data, error, isLoading } = useSWR(["movieRating", id], () =>
    getMovieReleaseData(id)
  );

  const usRelease = data?.results?.find(
    (r: RegionReleaseInfo) => r.iso_3166_1 === "US"
  );

  const certification = usRelease?.release_dates?.[0]?.certification || "NR"; // NR = Not Rated

  return {
    certification,
    isLoading,
    isError: error,
  };
}
