"use client";

import genres from "@/app/data/genreData";
import GenreButton from "./component/GenreButton";
import SearchBar from "./component/SearchBar";
import ScrollableContainer from "../../ui/ScrollableContainer";
import { useSidebar } from "@/app/contexts/SidebarContext";

export default function SearchControls({
  genreArray,
  setGenreArray,
  searchValue,
  setSearchValue,
  showMovies,
  setShowMovies,
}: any) {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="flex items-center justify-between gap-4 py-3 lg:p-0">
      {/* Left side - Genre buttons */}
      <div className="w-auto overflow-x-auto w-max-[400px]">
        <ScrollableContainer scrollDistance={300}>
          <div className="flex gap-4 items-center lg:min-h-[110px] sm:pb-0">
            {genres.map((genre, index) => (
              <GenreButton
                key={index}
                genre={genre.name}
                genreArray={genreArray}
                setGenreArray={setGenreArray}
              />
            ))}
          </div>
        </ScrollableContainer>
      </div>

      {/* Right side - Search bar and hamburger */}
      <div className="flex items-center gap-3">
        {/* Search bar - visible on large screens only */}
        <div className="hidden lg:block min-w-[300px] max-w-[400px]">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
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
            className="w-6 h-6 font-bold text-semantic-accent-secondary group-hover:text-semantic-accent-primary transition-colors duration-200"
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
