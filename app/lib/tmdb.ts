const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchFromTMDB(endpoint: string) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  console.log("TMDB API Key available:", !!apiKey);

  if (!apiKey) {
    throw new Error(
      "TMDB API key not found. Make sure NEXT_PUBLIC_TMDB_API_KEY is set in .env.local"
    );
  }

  const joiner = endpoint.includes("?") ? "&" : "?";
  const url = `${BASE_URL}${endpoint}${joiner}api_key=${apiKey}`;
  console.log("TMDB API URL:", url.replace(apiKey, "***"));
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
  return res.results;
}

export async function getMovieDetails(id: number) {
  return fetchFromTMDB(`/movie/${id}`);
}

export async function getMovieYoutubeTrailer(id: number) {
  const data = await fetchFromTMDB(`/movie/${id}/videos`);

  // Filter to find a YouTube trailer
  const trailer = data.results.find(
    (video: any) => video.site === "YouTube" && video.type === "Trailer"
  );

  return trailer?.key || null;
}
