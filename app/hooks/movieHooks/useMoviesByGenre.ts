import useSWR from "swr";
import { getMoviesByGenre } from "../../lib/tmdb";

export function useMoviesByGenre(ids: number[]) {
  const shouldFetch = ids.length > 0;

  const { data, error, isLoading } = useSWR(
    shouldFetch ? ["movieGenre", ids] : null, // null prevents fetching when no genres selected
    () => getMoviesByGenre(ids)
  );

  return {
    data,
    isLoading,
    isError: !!error, // convert error object to boolean
  };
}
