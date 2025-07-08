"use client";
import { dummyCarouselItems } from "@/app/data/carouselData";
import MovieCard from "@/app/features/movies/components/MovieCard";
import React, { useState } from "react";

export default function MovieList() {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;

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
    <div className="h-full w-full max-w-6xl mx-auto p-6 flex flex-col">
      {/* Movie Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 min-h-[680px] max-h-[800px]">
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

      {/* Fixed Pagination at Bottom */}
      <div className="mt-6 p-2 ">{totalPages > 1 && renderPagination()}</div>
    </div>
  );
}
