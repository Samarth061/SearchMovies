export interface TMDBMovie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path?: string;
  overview: string;
  vote_average: number;
  release_date?: string;
  genres?: Array<{ id: number; name: string }>;
  adult?: boolean;
  original_language?: string;
  original_title?: string;
  popularity?: number;
  video?: boolean;
  vote_count?: number;
  runtime: number;
  certification?: string;
  director?: string;
  writers?: string[];
}
