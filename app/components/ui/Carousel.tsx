"use client";

import React, { useState, useEffect, useCallback } from "react";

export interface CarouselItem {
  id: string;
  title: string;
  image: string;
  description?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
  className?: string;
  height?: string;
  width?: string;
  customDimensions?: {
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
  };
}

export default function Carousel({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showIndicators = true,
  showControls = true,
  className = "",
  height = "h-56 md:h-96",
  width = "w-full",
  customDimensions,
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
        className={`flex items-center justify-center ${height} bg-semantic-background-card rounded-lg`}
      >
        <p className="text-semantic-text-muted">No items to display</p>
      </div>
    );
  }

  const containerStyles = customDimensions
    ? {
        width: customDimensions.width || width,
        height: customDimensions.height || height,
        maxWidth: customDimensions.maxWidth,
        maxHeight: customDimensions.maxHeight,
      }
    : {};

  const containerClasses = customDimensions
    ? `relative ${className}`
    : `relative ${width} ${className}`;

  return (
    <div
      className={containerClasses}
      style={customDimensions ? containerStyles : {}}
      role="region"
      aria-label="Featured content carousel"
    >
      {/* Carousel wrapper */}
      <div
        className={`relative ${
          customDimensions ? "h-full" : height
        } overflow-hidden rounded-lg bg-semantic-background-card`}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute block w-full h-full object-cover -translate-x-1/2 top-0 left-1/2"
              style={{ objectPosition: "center 5%" }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder-movie.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-semantic-background-primary/80 to-transparent" />
            <div className="absolute bottom-6 left-16 right-16">
              <h3 className="text-xl md:text-2xl font-bold text-semantic-text-primary mb-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm md:text-base text-semantic-text-secondary line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      {showIndicators && items.length > 1 && (
        <div className="absolute z-30 flex -translate-x-1/2 bottom-1 left-1/2 space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
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
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-semantic-background-primary/30 group-hover:bg-semantic-background-primary/50 group-focus:ring-4 group-focus:ring-semantic-accent-primary/50 group-focus:outline-none transition-colors duration-200">
            <svg
              className="w-4 h-4 text-semantic-text-primary"
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
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-semantic-background-primary/30 group-hover:bg-semantic-background-primary/50 group-focus:ring-4 group-focus:ring-semantic-accent-primary/50 group-focus:outline-none transition-colors duration-200">
            <svg
              className="w-4 h-4 text-semantic-text-primary"
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
