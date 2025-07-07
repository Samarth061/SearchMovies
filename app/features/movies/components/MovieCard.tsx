import React from "react";

interface MovieCardProps {
  className?: string;
  title: string;
  image: string;
}
export default function MovieCard({ className, title, image }: MovieCardProps) {
  return (
    <div
      className={`relative bg-semantic-background-card rounded-xl overflow-hidden shadow-md p-6 ${className}`}
    >
      {/* Image background */}
      <div className="relative w-full h-72">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-semantic-background-primary/80 to-transparent" />
        {/* Title over image */}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-xl md:text-2xl font-bold text-semantic-text-primary mb-2">
            {title}
          </h3>
        </div>
      </div>

      {/* Button below image */}
      <button className="mt-4 px-4 py-2 bg-semantic-accent-primary text-semantic-text-primary rounded-md transition-colors hover:bg-semantic-accent-secondary">
        View Details
      </button>
      <div className="absolute top-2 left-2 bg-semantic-accent-primary px-2 py-1 text-xs rounded-full">
        ⭐ 8.5
      </div>
    </div>
  );
}
