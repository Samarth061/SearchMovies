import { getMovieBySearch } from "@/app/lib/tmdb";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";

export function useMoviesBySearch(name: string, page = 1) {
  const [searchTerm, setSearchTerm] = useState(name);
  const [debouncedName] = useDebounce(searchTerm, 500); // debounce 500ms

  // Keep search term updated
  useEffect(() => {
    setSearchTerm(name);
  }, [name]);

  const { data, error, isLoading } = useSWR(
    debouncedName ? ["movieBySearch", debouncedName, page] : null,
    () => getMovieBySearch(debouncedName, page)
  );

  return {
    search: data,
    isLoading,
    isError: error,
  };
}
