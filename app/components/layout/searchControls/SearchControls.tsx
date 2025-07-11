"use client";

import genres from "@/app/data/genreData";
import React from "react";
import GenreButton from "./component/GenreButton";
import SearchBar from "./component/SearchBar";
import { useSidebar } from "@/app/contexts/SidebarContext";

export default function SearchControls() {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="flex items-center justify-between gap-4">
      {/* Left side - Genre buttons */}
      <div className="flex flex-wrap gap-6 lg:gap-8 items-center lg:min-h-[110px]">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-4 justify-items-center">
          {genres.map((genre, index) => (
            <GenreButton key={index} genre={genre} />
          ))}
        </div>
      </div>

      {/* Right side - Search bar and hamburger */}
      <div className="flex items-center gap-3">
        {/* Search bar - visible on large screens only */}
        <div className="hidden lg:block min-w-[300px] max-w-[400px]">
          <SearchBar />
        </div>

        {/* Hamburger button */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg transition-all duration-200 group hover:bg-semantic-background-elevated"
          aria-label="Open filters and search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-semantic-text-secondary group-hover:text-semantic-accent-primary transition-colors duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
