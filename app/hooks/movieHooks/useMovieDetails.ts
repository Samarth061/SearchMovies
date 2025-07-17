import useSWR from "swr";
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
  const { data, error, isLoading } = useSWR(["movieDetails", id], () =>
    getMovieDetails(id)
  );

  return {
    movie: data,
    isLoading,
    isError: error,
  };
}
