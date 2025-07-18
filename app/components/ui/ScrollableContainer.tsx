"use client";
import React, { useState, useEffect, useId, useCallback } from "react";

interface ScrollableContainerProps {
  children: React.ReactNode;
  scrollDistance?: number;
  gap?: string;
  padding?: string;
  buttonClassName?: string;
  containerClassName?: string;
  showArrows?: boolean;
  ariaLabel?: string;
}

export default function ScrollableContainer({
  children,
  scrollDistance = 150,
  gap = "gap-3",
  padding = "px-2",
  buttonClassName = "flex items-center justify-center h-full cursor-pointer group focus:outline-none transition-opacity duration-200",
  containerClassName = "flex scroll-smooth overflow-x-auto scrollbar-hide",
  showArrows = true,
  ariaLabel = "Scrollable content",
}: ScrollableContainerProps) {
  const [hasOverflow, setHasOverflow] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const sliderId = useId();

  const checkScrollPosition = useCallback(() => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      setIsAtStart(scrollLeft <= 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
      setHasOverflow(scrollWidth > clientWidth);
    }
  }, [sliderId]);

  const handleScroll = useCallback(() => {
    checkScrollPosition();
  }, [checkScrollPosition]);

  useEffect(() => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      // Initial check
      const timeoutId = setTimeout(checkScrollPosition, 100);

      // Add scroll event listener
      slider.addEventListener("scroll", handleScroll, { passive: true });

      // Add resize listener
      const handleResize = () => {
        setTimeout(checkScrollPosition, 100);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timeoutId);
        slider.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [children, sliderId, handleScroll, checkScrollPosition]);

  const scrollLeft = () => {
    const slider = document.getElementById(sliderId);
    if (slider && !isAtStart) {
      slider.scrollBy({ left: -scrollDistance, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const slider = document.getElementById(sliderId);
    if (slider && !isAtEnd) {
      slider.scrollBy({ left: scrollDistance, behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex items-center gap-2 flex-1 min-w-0 overflow-x-hidden"
      role="region"
      aria-label={ariaLabel}
    >
      {/* Left Arrow - show when overflow occurs, disable at start */}
      {showArrows && hasOverflow && (
        <button
          type="button"
          onClick={scrollLeft}
          disabled={isAtStart}
          className={`${buttonClassName} ${
            isAtStart ? "opacity-30 cursor-not-allowed" : "opacity-100"
          }`}
          aria-label="Scroll left"
        >
          <span className="inline-flex items-center justify-center w-6 h-8 md:w-8 md:h-10 bg-semantic-background-secondary group-hover:bg-semantic-background-secondary/50 group-focus:ring-4 group-focus:ring-semantic-accent-primary/50 group-focus:outline-none transition-colors duration-200">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-semantic-text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
      )}

      {/* Scrollable Container - takes remaining space */}
      <div className="flex-1 overflow-hidden">
        <div
          id={sliderId}
          className={`${containerClassName} ${gap} ${padding}`}
          style={{ scrollBehavior: "smooth" }}
        >
          {children}
        </div>
      </div>

      {/* Right Arrow - show when overflow occurs, disable at end */}
      {showArrows && hasOverflow && (
        <button
          type="button"
          onClick={scrollRight}
          disabled={isAtEnd}
          className={`${buttonClassName} ${
            isAtEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
          }`}
          aria-label="Scroll right"
        >
          <span className="inline-flex items-center justify-center w-6 h-8 md:w-8 md:h-10 bg-semantic-background-secondary group-hover:bg-semantic-background-secondary/50 group-focus:ring-4 group-focus:ring-semantic-accent-primary/50 group-focus:outline-none transition-colors duration-200">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-semantic-text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      )}
    </div>
  );
}
