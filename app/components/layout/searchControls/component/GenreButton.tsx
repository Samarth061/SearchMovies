import React from "react";

interface GenreButtonProps {
  genre: string;
}

export default function GenreButton({ genre }: GenreButtonProps) {
  return (
    <button
      className="
        w-fit max-w-[120px] sm:max-w-[140px] md:max-w-[200px] 
        max-h-[36px] md:max-h-[50px]
        px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 
        text-xs sm:text-sm md:text-base 
        font-geist-sans 
        bg-semantic-background-button text-semantic-text-secondary
        border-2 border-transparent
        hover:bg-semantic-accent-secondary hover:border-semantic-accent-hot hover:cursor-pointer
        transition duration-200
        truncate
      "
    >
      {genre}
    </button>
  );
}
