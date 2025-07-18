"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CarouselProps } from "@/app/types/carouselMovie";

export default function Carousel({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showIndicators = true,
  showControls = true,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide, items.length]);

  if (!items || items.length === 0) {
    return (
      <div
        className={`flex items-center justify-center aspect-video bg-semantic-background-card ${className}`}
      >
        <p className="text-semantic-text-muted">No items to display</p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full aspect-video ${className}`}
      role="region"
      aria-label="Featured content carousel"
    >
      {/* Carousel wrapper */}
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-semantic-background-secondary via-semantic-accent-primary to-semantic-background-elevated">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              priority
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              style={{ objectPosition: "center center" }}
              onError={() => {
                // Next.js Image component handles errors differently
                // Fallback handled by Next.js built-in error handling
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-semantic-background-primary/20 via-transparent to-transparent pointer-events-none" />

            {/* Title and Description Overlay - Bottom Left */}
            <div className="absolute bottom-5 left-4 sm:bottom-10 sm:left-8 max-w-xs lg:max-w-xl backdrop-blur-md bg-black/80 rounded-lg p-4">
              <h3 className="text-white text-xs sm:text-lg md:text-xl lg:text-2xl font-bold line-clamp-1">
                {item.title}
              </h3>
              {item.description && (
                <p className="hidden lg:block text-white/90 text-sm md:text-base lg:text-lg mt-2 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>

            {/* Rating Display - Top Right */}
            {item.rating && (
              <div className="absolute top-4 right-4 backdrop-blur-md bg-black/80 rounded-lg px-3 py-2">
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white font-semibold text-sm">
                    {item.rating}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      {showIndicators && items.length > 1 && (
        <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hidden sm:block w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? "bg-semantic-accent-primary"
                  : "bg-semantic-text-muted hover:bg-semantic-text-secondary"
              }`}
              aria-current={index === currentIndex}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      {/* Previous button */}
      {showControls && items.length > 1 && (
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-semantic-background-secondary/30 group-hover:bg-semantic-background-primary/50 group-focus:ring-4 group-focus:ring-semantic-accent-primary/50 group-focus:outline-none transition-colors duration-200">
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

      {/* Next button */}
      {showControls && items.length > 1 && (
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-semantic-background-secondary/30 group-hover:bg-semantic-background-primary/50 group-focus:ring-4 group-focus:ring-semantic-accent-primary/50 group-focus:outline-none transition-colors duration-200">
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
