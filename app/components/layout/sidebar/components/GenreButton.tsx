import React from "react";

interface GenreButtonProps {
  genre: string;
}

export default function GenreButton({ genre }: GenreButtonProps) {
  return (
    <button
      className="
        w-full max-w-[200px]
        px-3 py-2 text-sm md:text-base rounded-full
        font-geist-sans
        bg-semantic-accent-primary text-semantic-text-primary
        border-2 border-transparent
        hover:bg-semantic-accent-secondary hover:border-semantic-accent-focus
        transition duration-200
        whitespace-nowrap overflow-hidden text-ellipsis
      "
    >
      {genre}
    </button>
  );
}
