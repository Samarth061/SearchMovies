import React, { useState, useEffect } from "react";
import { TMDBMovie } from "@/app/types/TMDBmovie";

interface MovieRatingGenreProps {
  movie: TMDBMovie;
}

export default function MovieRatingGenre({ movie }: MovieRatingGenreProps) {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const slider = document.getElementById("genre-slider");
      if (slider) {
        const hasOverflow = slider.scrollWidth > slider.clientWidth;
        const scrollLeft = Math.round(slider.scrollLeft);
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        const isAtStart = scrollLeft <= 2; // 2px tolerance
        const isAtEnd = scrollLeft >= maxScroll - 2; // 2px tolerance

        setShowLeftButton(hasOverflow && !isAtStart);
        setShowRightButton(hasOverflow && !isAtEnd);
      }
    };

    const handleResize = () => {
      setTimeout(checkOverflow, 100);
    };

    const handleScroll = () => {
      checkOverflow();
    };

    // Use timeout to ensure DOM is fully rendered and then setup everything
    const timeoutId = setTimeout(() => {
      const slider = document.getElementById("genre-slider");
      if (slider) {
        // Initial check
        checkOverflow();
        
        // Add scroll listener
        slider.addEventListener("scroll", handleScroll);
      }
    }, 100);

    // Add resize listener immediately
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      const slider = document.getElementById("genre-slider");
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, [movie.genres]);

  const scrollLeft = () => {
    const slider = document.getElementById("genre-slider");
    if (slider) {
      slider.scrollBy({ left: -150, behavior: "smooth" });
      // Re-check button states after scroll completes
      setTimeout(() => {
        const checkOverflow = () => {
          if (slider) {
            const hasOverflow = slider.scrollWidth > slider.clientWidth;
            const scrollLeft = Math.round(slider.scrollLeft);
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            const isAtStart = scrollLeft <= 2;
            const isAtEnd = scrollLeft >= maxScroll - 2;
            
            setShowLeftButton(hasOverflow && !isAtStart);
            setShowRightButton(hasOverflow && !isAtEnd);
          }
        };
        checkOverflow();
      }, 300); // Wait for smooth scroll to complete
    }
  };

  const scrollRight = () => {
    const slider = document.getElementById("genre-slider");
    if (slider) {
      slider.scrollBy({ left: 150, behavior: "smooth" });
      // Re-check button states after scroll completes
      setTimeout(() => {
        const checkOverflow = () => {
          if (slider) {
            const hasOverflow = slider.scrollWidth > slider.clientWidth;
            const scrollLeft = Math.round(slider.scrollLeft);
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            const isAtStart = scrollLeft <= 2;
            const isAtEnd = scrollLeft >= maxScroll - 2;
            
            setShowLeftButton(hasOverflow && !isAtStart);
            setShowRightButton(hasOverflow && !isAtEnd);
          }
        };
        checkOverflow();
      }, 300); // Wait for smooth scroll to complete
    }
  };

  return (
    <div>
      <h1 className="flex text-2xl sm:text-3xl lg:text-4xl font-bold text-semantic-text-description py-1">
        {movie.title}
      </h1>

      {/* Rating and Genre Section - Combined */}
      <div className="py-2 flex items-center gap-4">
        {/* Rating Section */}
        <div className="flex items-center flex-shrink-0">
          <svg
            className="w-8 h-8 text-yellow-400 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-semantic-text-description text-2xl">
            {Math.ceil(movie.vote_average * 10) / 10}
          </span>
        </div>

        {/* Genre Section */}
        {movie.genres && movie.genres.length > 0 && (
          <div className="relative flex-1 min-w-0">
            {/* Left Arrow - only show when there's overflow and not at start */}
            {showLeftButton && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/70"
              >
                ◀
              </button>
            )}

            {/* Genre Scrollable Slider - no scrollbar */}
            <div
              id="genre-slider"
              className="flex gap-3 overflow-hidden scroll-smooth px-8"
              style={{ scrollBehavior: "smooth" }}
            >
              {movie.genres.map((genre: { id: number; name: string }) => (
                <button
                  key={genre.id}
                  className="text-semantic-text-description text-lg rounded-lg px-2 py-1 bg-semantic-accent-secondary hover:bg-semantic-accent-secondary/80 whitespace-nowrap flex-shrink-0"
                >
                  {genre.name}
                </button>
              ))}
            </div>

            {/* Right Arrow - only show when there's overflow and not at end */}
            {showRightButton && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/70"
              >
                ▶
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
