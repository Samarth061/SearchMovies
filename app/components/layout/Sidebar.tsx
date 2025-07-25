"use client";

import React from "react";
import FlyoutMenu from "./searchControls/component/FlyoutMenu";
import SearchBar from "./searchControls/component/SearchBar";
import { useSidebar } from "@/app/contexts/SidebarContext";
import { useMovieFilters } from "@/app/contexts/MovieFiltersContext";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const { setRating, rawMovies, setShowMovies, searchValue, setSearchValue } =
    useMovieFilters();

  return (
    <>
      {/* Backdrop overlay for mobile/tablet screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-semantic-background-secondary z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } ${
          // Responsive width - narrower on mobile, wider on larger screens
          "w-80 sm:w-96 lg:w-80"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 ">
          <h2 className="text-lg font-semibold text-semantic-text-primary">
            Filters & Search
          </h2>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-lg hover:bg-semantic-background-elevated transition-colors duration-200"
            aria-label="Close sidebar"
          >
            <svg
              className="w-5 h-5 text-semantic-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Search Bar - only visible on mobile/tablet */}
          <div className="lg:hidden p-4 border-b border-semantic-border-default">
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>

          {/* Filter Menu Content */}
          <div className="flex-1 p-4">
            <FlyoutMenu
              rawMovies={rawMovies}
              setShowMovies={setShowMovies}
              setRating={setRating}
            />
          </div>
        </div>
      </div>
    </>
  );
}
