// hooks/useNowPlayingMovies.ts
import useSWR from "swr";
import { getCurrentlyPlayingMovies } from "../../lib/tmdb";

/**
 * Fetches and returns the currently playing movies from The Movie Database (TMDB).
 * The movies are fetched with the given page number.
 *
 * @param {number} page The page number to fetch. Defaults to 1.
 * @returns {Object} A response object with the following properties:
 * - movies: The currently playing movies in an array.
 * - isLoading: A boolean indicating if the movies are being fetched.
 * - isError: A boolean indicating if there was an error fetching the movies.
 */
export function useNowPlayingMovies(page = 1) {
  const { data, error, isLoading } = useSWR(["nowPlayingMovies", page], () =>
    getCurrentlyPlayingMovies(page)
  );

  return {
    movies: data,
    isLoading,
    isError: error,
  };
}
