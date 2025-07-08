import React from "react";

interface GenreButtonProps {
  genre: string;
}

export default function GenreButton({ genre }: GenreButtonProps) {
  return (
    <button
      className="
    rounded-full
    px-2 py-1.5 sm:px-3 sm:py-2
    text-sm sm:text-base
    font-geist-sans
    bg-semantic-accent-primary
    text-semantic-text-primary

    border-2
    border-transparent
    hover:border-semantic-accent-focus

    hover:bg-semantic-accent-secondary

    transition-all duration-200
    cursor-pointer
    whitespace-nowrap
    min-w-0
    overflow-hidden
    text-ellipsis
  "
    >
      {" "}
      {genre}
    </button>
  );
}
