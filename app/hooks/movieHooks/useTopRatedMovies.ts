import useSWR from "swr";
import { getTopRatedMovies } from "../../lib/tmdb";

/**
 * Fetches the top rated movies from the TMDB API.
 *
 * @param {number} [page=1] The page of results to fetch.
 * @param {number} [limit=5] The number of movies to fetch per page.
 * @returns {{movies: Movie[], isLoading: boolean, isError: boolean}}
 * @throws An error if the API request fails.
 */
export function useTopRatedMovies(page = 1, limit = 5) {
  const { data, error, isLoading } = useSWR(
    ["topRatedMovies", page, limit],
    () => getTopRatedMovies(page, limit)
  );

  return {
    movies: data,
    isLoading,
    isError: error,
  };
}
