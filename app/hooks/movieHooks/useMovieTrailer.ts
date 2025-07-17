import useSWR from "swr";
import { getMovieYoutubeTrailer } from "../../lib/tmdb";

/**
 * Fetches the YouTube trailer ID for a movie from TMDB
 *
 * @param {number} movieId The ID of the movie to fetch trailer for
 * @returns {{trailerKey: string | null, isLoading: boolean, isError: boolean}}
 */
export function useMovieTrailer(movieId: number) {
  const { data, error, isLoading } = useSWR(
    movieId ? ["movieTrailer", movieId] : null,
    () => getMovieYoutubeTrailer(movieId)
  );

  return {
    trailerKey: data || null,
    isLoading,
    isError: error,
  };
}
