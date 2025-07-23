"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { TMDBMovie } from "@/app/types/TMDBmovie";
export interface MovieFiltersContextType {
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  rawMovies: TMDBMovie[];
  setRawMovies: React.Dispatch<React.SetStateAction<TMDBMovie[]>>;
  showMovies: TMDBMovie[];
  setShowMovies: React.Dispatch<React.SetStateAction<TMDBMovie[]>>;
  genreArray: number[];
  setGenreArray: React.Dispatch<React.SetStateAction<number[]>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
const MovieFiltersContext = createContext<MovieFiltersContextType | undefined>(
  undefined
);

interface MovieFiltersProviderProps {
  children: ReactNode;
}

export function MovieFiltersProvider({ children }: MovieFiltersProviderProps) {
  const [duration, setDuration] = useState(120);
  const [rating, setRating] = useState(0);
  // stores movies in TMDB API format not TMDB format
  const [rawMovies, setRawMovies] = useState<TMDBMovie[]>([]);
  const [showMovies, setShowMovies] = useState<TMDBMovie[]>([]);

  const [genreArray, setGenreArray] = useState<number[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const value: MovieFiltersContextType = {
    duration,
    setDuration,
    rating,
    setRating,
    rawMovies,
    setRawMovies,
    showMovies,
    setShowMovies,
    genreArray,
    setGenreArray,
    searchValue,
    setSearchValue,
  };

  return (
    <MovieFiltersContext.Provider value={value}>
      {children}
    </MovieFiltersContext.Provider>
  );
}

export function useMovieFilters(): MovieFiltersContextType {
  const context = useContext(MovieFiltersContext);
  if (context === undefined) {
    throw new Error(
      "useMovieFilters must be used within a MovieFiltersProvider"
    );
  }
  return context;
}
