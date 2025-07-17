import useSWR from "swr";
import { getCastPhoto } from "../../lib/tmdb";

export function useCastPhoto(id: number) {
  const { data, error, isLoading } = useSWR(["castPhoto", id], () =>
    getCastPhoto(id)
  );

  return {
    cast: data,
    isLoading,
    isError: error,
  };
}
