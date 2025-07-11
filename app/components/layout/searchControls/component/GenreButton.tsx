import React from "react";

interface GenreButtonProps {
  genre: string;
}

export default function GenreButton({ genre }: GenreButtonProps) {
  return (
    <button
      className="
        w-full max-w-[200px] max-h-[50px]
        px-3 py-2 text-sm md:text-base 
        font-geist-sans 
        bg-semantic-background-button text-semantic-text-secondary
        border-2 border-transparent
        hover:bg-semantic-accent-secondary hover:border-semantic-accent-hot hover:cursor-pointer
        transition duration-200
        whitespace-nowrap overflow-hidden text-ellipsis
      "
    >
      {genre}
    </button>
  );
}
