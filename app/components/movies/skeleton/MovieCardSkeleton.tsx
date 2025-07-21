import React from "react";

export default function MovieCardSkeleton() {
  return (
    <div className="group relative w-full max-w-sm mx-auto animate-pulse">
      <div className="relative shadow-lg aspect-[11/16] sm:aspect-[2/3] md:aspect-[2/3] lg:aspect-[2/3] xl:aspect-[2/3]">
        <div className="relative w-full h-full overflow-hidden">
          {/* Main poster placeholder */}
          <div className="w-full h-full bg-semantic-background-elevated"></div>

          {/* Rating badge skeleton */}
          <div className="absolute top-3 left-3 bg-semantic-background-button/60 backdrop-blur-md px-3 py-1.5 rounded-xl">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-semantic-background-primary rounded"></div>
              <div className="w-6 h-3 bg-semantic-background-primary rounded"></div>
            </div>
          </div>

          {/* Title overlay skeleton */}
          <div className="absolute bottom-3 left-3 bg-semantic-background-elevated/60 backdrop-blur-md px-3 py-2 rounded-xl w-3/4">
            <div className="h-5 bg-semantic-background-primary rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
