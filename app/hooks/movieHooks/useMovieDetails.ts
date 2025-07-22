import useSWR from "swr";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../../lib/tmdb";

/**
 * Fetches the details of a movie from The Movie Database (TMDB) and returns
 * them with an `isLoading` and `isError` state.
 *
 * @param {number} id The ID of the movie to fetch.
 * @returns {{movie: Movie, isLoading: boolean, isError: boolean}}
 * @throws An error if the API request fails.
 */
export function useMovieDetails(id: number) {
  const [artificialLoading, setArtificialLoading] = useState(true);
  
  const { data, error, isLoading } = useSWR(
    ["movieDetails", id], 
    () => getMovieDetails(id),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
    }
  );

  // Add minimum loading duration for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setArtificialLoading(false);
    }, 800); // 800ms minimum loading time

    return () => clearTimeout(timer);
  }, [id]);

  // Reset artificial loading when ID changes
  useEffect(() => {
    setArtificialLoading(true);
  }, [id]);

  return {
    movie: data,
    isLoading: isLoading || artificialLoading,
    isError: error,
  };
}
