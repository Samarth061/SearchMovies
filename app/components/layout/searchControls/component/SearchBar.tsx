"use client";

import React from "react";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <label htmlFor="movie-search" className="sr-only">
        Search movies, TV shows, and series
      </label>
      <div className="relative">
        <input
          type="search"
          id="movie-search"
          name="q"
          placeholder="Search movies..."
          autoComplete="off"
          aria-label="Search movies, TV shows, and series"
          className="w-full px-4 py-3 pr-12 bg-semantic-background-elevated border border-semantic-border-default rounded-lg text-semantic-text-primary placeholder-semantic-text-muted focus:outline-none focus:ring-2 focus:ring-semantic-border-focus focus:border-transparent transition-all duration-200"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-semantic-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}