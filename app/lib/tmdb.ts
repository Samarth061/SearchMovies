const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchFromTMDB(endpoint: string) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!apiKey) {
    throw new Error(
      "TMDB API key not found. Make sure NEXT_PUBLIC_TMDB_API_KEY is set in .env.local"
    );
  }

  const joiner = endpoint.includes("?") ? "&" : "?";
  const url = `${BASE_URL}${endpoint}${joiner}api_key=${apiKey}`;
  const res = await fetch(url);

  if (!res.ok) {
    const errText = await res.text();
    console.error("TMDB error:", res.status, errText);
    throw new Error(`TMDB API error: ${res.status} ${errText}`);
  }

  return res.json();
}

export async function getTopRatedMovies(page = 1, limit = 5) {
  const res = await fetchFromTMDB(`/movie/top_rated?page=${page}`);
  return res.results.slice(0, limit);
}

export async function getCurrentlyPlayingMovies(page = 1) {
  const res = await fetchFromTMDB(
    `/movie/now_playing?language=en-US&page=${page}`
  );
  return {
    results: res.results,
    totalPages: res.total_pages,
    totalResults: res.total_results,
    currentPage: res.page
  };
}

export async function getMovieDetails(id: number) {
  return fetchFromTMDB(`/movie/${id}?append_to_response=release_dates`);
}

export async function getMovieYoutubeTrailer(id: number) {
  const data = await fetchFromTMDB(`/movie/${id}/videos`);

  // Filter to find a YouTube trailer
  const trailer = data.results.find(
    (video: { site: string; type: string }) => video.site === "YouTube" && video.type === "Trailer"
  );

  return trailer?.key || null;
}

export async function getMovieCredits(id: number) {
  return fetchFromTMDB(`/movie/${id}/credits`);
}

export async function getCastPhoto(id: number) {
  return fetchFromTMDB(`/person/${id}/images`);
}

export async function getMovieReleaseData(id: number) {
  return fetchFromTMDB(`/movie/${id}/release_dates`);
}

export async function getMoviesByGenre(genreId: number[], page = 1) {
  const genreQuery = genreId.join(",");
  const data = await fetchFromTMDB(
    `/discover/movie?with_genres=${genreQuery}}&page=${page}`
  );
  return {
    results: data.results,
    totalPages: data.total_pages,
    totalResults: data.total_results,
    currentPage: data.page
  };
}

export async function getMovieBySearch(movieName: string, page = 1) {
  const movie = await fetchFromTMDB(
    `/search/movie?query=${movieName}&page=${page}`
  );
  return {
    results: movie.results,
    totalPages: movie.total_pages,
    totalResults: movie.total_results,
    currentPage: movie.page
  };
}
