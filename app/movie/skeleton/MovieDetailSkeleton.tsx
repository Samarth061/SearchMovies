import React from "react";

export default function MovieDetailSkeleton() {
  return (
    <div className="flex-1 pt-4 pb-4 flex flex-col items-center justify-start space-y-6 animate-pulse">
      {/* Backdrop Image Skeleton */}
      <div className="relative w-full max-w-[1440px] mx-auto aspect-[4/3] sm:aspect-[3/2] md:aspect-video">
        <div className="w-full h-full bg-semantic-background-elevated"></div>
        
        {/* Overlay Content Skeleton */}
        <div className="absolute bottom-0 left-0 z-10 max-w-[1440px] w-full py-3 px-4 bg-semantic-background-primary/50 backdrop-blur-xl">
          {/* Rating and Genre Skeleton */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {/* Rating skeleton */}
            <div className="flex items-center gap-2 bg-semantic-background-button/60 backdrop-blur-md px-3 py-1.5 rounded-xl">
              <div className="w-4 h-4 bg-semantic-background-primary rounded"></div>
              <div className="w-8 h-4 bg-semantic-background-primary rounded"></div>
            </div>
            {/* Genre badges skeleton */}
            <div className="w-16 h-6 bg-semantic-background-elevated rounded-full"></div>
            <div className="w-20 h-6 bg-semantic-background-elevated rounded-full"></div>
            <div className="w-14 h-6 bg-semantic-background-elevated rounded-full"></div>
          </div>
          
          {/* Title Skeleton */}
          <div className="w-2/3 h-8 bg-semantic-background-elevated rounded mb-2"></div>
          
          {/* Description Skeleton */}
          <div className="space-y-2">
            <div className="w-full h-4 bg-semantic-background-elevated rounded"></div>
            <div className="w-full h-4 bg-semantic-background-elevated rounded"></div>
            <div className="w-3/4 h-4 bg-semantic-background-elevated rounded"></div>
          </div>
        </div>
      </div>

      {/* Movie Info Card and Trailer Side by Side */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center pt-2">
        {/* Movie Info Card Skeleton */}
        <div className="w-full md:w-5/12 lg:w-1/3 flex justify-center md:justify-start">
          <div className="w-full max-w-xs md:max-w-none">
            <div className="bg-semantic-background-elevated p-6 rounded-2xl shadow-lg">
              {/* Poster skeleton */}
              <div className="aspect-[2/3] bg-semantic-background-primary rounded-xl mb-4"></div>
              
              {/* Movie details skeleton */}
              <div className="space-y-3">
                <div className="w-full h-6 bg-semantic-background-primary rounded"></div>
                <div className="w-3/4 h-4 bg-semantic-background-primary rounded"></div>
                <div className="w-1/2 h-4 bg-semantic-background-primary rounded"></div>
                <div className="w-2/3 h-4 bg-semantic-background-primary rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Trailer Skeleton */}
        <div className="w-full md:w-7/12 lg:w-2/3 flex items-start">
          <div className="w-full">
            <div className="bg-semantic-background-elevated rounded-2xl overflow-hidden">
              <div className="aspect-video bg-semantic-background-primary flex items-center justify-center">
                <div className="w-16 h-16 bg-semantic-background-elevated rounded-full"></div>
              </div>
              <div className="p-4">
                <div className="w-1/3 h-5 bg-semantic-background-primary rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cast Section Skeleton */}
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="space-y-4">
          {/* Cast title skeleton */}
          <div className="w-32 h-7 bg-semantic-background-elevated rounded"></div>
          
          {/* Cast grid skeleton */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square bg-semantic-background-elevated rounded-full mb-2"></div>
                <div className="w-full h-4 bg-semantic-background-elevated rounded mb-1"></div>
                <div className="w-3/4 h-3 bg-semantic-background-elevated rounded mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}