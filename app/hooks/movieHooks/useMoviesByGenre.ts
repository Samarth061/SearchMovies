import useSWR from "swr";
import { getMoviesByGenre } from "../../lib/tmdb";
import { useEffect, useState } from "react";

export function useMoviesByGenre(ids: number[], page = 1) {
  const [artificialLoading, setArtificialLoading] = useState(true);

  const shouldFetch = ids.length > 0;

  const { data, error, isLoading } = useSWR(
    shouldFetch ? ["movieGenre", ids, page] : null, // null prevents fetching when no genres selected
    () => getMoviesByGenre(ids, page),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setArtificialLoading(false);
    }, 800); // 800ms minimum loading time

    return () => clearTimeout(timer);
  }, [ids]);

  // Reset artificial loading when ID changes
  useEffect(() => {
    setArtificialLoading(true);
  }, [ids]);

  return {
    data,
    isLoading: isLoading || artificialLoading,
    isError: !!error, // convert error object to boolean
  };
}
