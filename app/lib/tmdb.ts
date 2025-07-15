const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchFromTMDB(endpoint: string) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  console.log("TMDB API Key available:", !!apiKey);
  
  if (!apiKey) {
    throw new Error("TMDB API key not found. Make sure NEXT_PUBLIC_TMDB_API_KEY is set in .env.local");
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
  const response = await fetchFromTMDB(`/movie/top_rated?page=${page}`);
  return response.results.slice(0, limit);
}
