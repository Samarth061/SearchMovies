import React, { useState } from "react";
import Image from "next/image";

interface MovieCardProps {
  className?: string;
  title: string;
  image: string;
  rating?: number;
  description?: string;
  onViewDetails?: () => void;
}

export default function MovieCard({
  className,
  title,
  image,
  rating = 8.5,
  description = "No description available",
  onViewDetails,
}: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-full max-w-sm mx-auto cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      aria-label={`View details for ${title}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setIsHovered(!isHovered);
        }
      }}
    >
      {/* Main Card Container */}
      <div
        className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[11/16] sm:aspect-[2/3] md:aspect-[2/3] lg:aspect-[2/3] xl:aspect-[2/3] ${className}`}
      >
        {/* Movie Poster */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />

          {/* Rating Badge */}
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-1">
              <Image
                src={"/star-svgrepo-com.svg"}
                alt="Star"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="text-white text-sm font-bold">{rating}</span>
            </div>
          </div>

          {/* Default Title Overlay */}
          <div
            className={`absolute bottom-3 left-3  bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg transition-all duration-300 ${
              isHovered ? "opacity-0 translate-y-2" : "opacity-100"
            }`}
          >
            <h3 className="text-semantic-text-primary text-lg font-bold truncate">
              {title}
            </h3>
          </div>

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-semantic-background-primary/95 backdrop-blur-sm transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-full flex flex-col justify-between p-6">
              {/* Title at top */}
              <div>
                <h3 className="text-semantic-text-primary text-xl font-bold mb-4 line-clamp-2">
                  {title}
                </h3>
                {/* Description */}
                <p className="text-semantic-text-secondary text-sm line-clamp-4 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* View Details Button */}
              <button
                onClick={onViewDetails}
                className="mt-6 w-full bg-semantic-accent-primary hover:bg-semantic-accent-secondary text-semantic-text-primary font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-semantic-accent-primary/20 group-hover:ring-semantic-accent-primary/40 transition-all duration-300 pointer-events-none" />
      </div>
    </div>
  );
}
