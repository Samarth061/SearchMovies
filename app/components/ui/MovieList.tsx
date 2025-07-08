"use client";
import { dummyCarouselItems } from "@/app/data/carouselData";
import MovieCard from "@/app/features/movies/components/MovieCard";
import React, { useState, useEffect } from "react";

export default function MovieList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [screenSize, setScreenSize] = useState("lg");

  // Screen size detection
  useEffect(() => {
    const getScreenSize = (width: number) => {
      if (width < 640) return "xs"; // Mobile - 2 cols
      if (width < 768) return "sm"; // Small - 3 cols
      if (width < 1024) return "md"; // Medium - 4 cols
      if (width < 1400) return "lg"; // Large - 5 cols
      return "xl"; // Extra Large - 6 cols
    };

    const handleResize = () => {
      setScreenSize(getScreenSize(window.innerWidth));
    };

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamic movies per page based on screen size (2 rows)
  const getMoviesPerPage = () => {
    const columnMap: { [key: string]: number } = {
      xs: 4, // 2 cols × 2 rows
      sm: 6, // 3 cols × 2 rows
      md: 8, // 4 cols × 2 rows
      lg: 10, // 5 cols × 2 rows
      xl: 12, // 6 cols × 2 rows
    };
    return columnMap[screenSize] || 6;
  };

  const moviesPerPage = getMoviesPerPage();

  // Reset current page when screen size changes (to prevent out-of-bounds issues)
  useEffect(() => {
    setCurrentPage(1);
  }, [screenSize]);

  // Calculate pagination
  const totalPages = Math.ceil(dummyCarouselItems.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = dummyCarouselItems.slice(startIndex, endIndex);

  // Generate random ratings for demo
  const generateRating = (index: number) => {
    const ratings = [8.5, 9.2, 7.8, 8.9, 9.1, 8.3, 7.5, 8.7, 9.0, 8.1];
    return ratings[index % ratings.length];
  };

  const handleViewDetails = (movieId: string) => {
    console.log(`View details for movie: ${movieId}`);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            currentPage === i
              ? "bg-semantic-accent-primary text-semantic-text-primary shadow-lg"
              : "bg-semantic-background-card text-semantic-text-secondary hover:bg-semantic-background-elevated hover:text-semantic-text-primary"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center gap-2">
        {/* Previous Arrow Button */}
        <button
          onClick={() => goToPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
            currentPage === 1
              ? "bg-semantic-background-primary text-semantic-text-muted cursor-not-allowed"
              : "bg-semantic-background-elevated text-semantic-text-secondary hover:bg-semantic-accent-secondary hover:text-semantic-text-primary"
          }`}
          aria-label="Previous page"
        >
          ←
        </button>

        {/* Page Numbers */}
        {pages}

        {/* Next Arrow Button */}
        <button
          onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
            currentPage === totalPages
              ? "bg-semantic-background-primary text-semantic-text-muted cursor-not-allowed"
              : "bg-semantic-background-elevated text-semantic-text-secondary hover:bg-semantic-accent-secondary hover:text-semantic-text-primary"
          }`}
          aria-label="Next page"
        >
          →
        </button>
      </div>
    );
  };

  return (
    <div className="h-full w-full max-w-7xl mx-auto p-6 pb-3 flex flex-col ">
      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 justify-items-center ">
        {currentMovies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            description={movie.description}
            rating={generateRating(startIndex + index)}
            onViewDetails={() => handleViewDetails(movie.id)}
          />
        ))}
      </div>

      {/* Spacer to push pagination toward bottom */}
      <div className="flex-1"></div>

      {/* Fixed Pagination at Bottom */}
      <div className="mt-3 p-6">{renderPagination()}</div>
    </div>
  );
}
