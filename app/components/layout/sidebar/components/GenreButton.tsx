import React from "react";

interface GenreButtonProps {
  genre: string;
}

export default function GenreButton({ genre }: GenreButtonProps) {
  return (
    <button
      className="
    rounded-full
    px-3 py-2
    text-base
    font-geist-sans
    bg-semantic-accent-primary
    text-semantic-text-primary

    border-2
    border-transparent
    hover:border-semantic-accent-focus

    hover:bg-semantic-accent-secondary

    transition-colors
    cursor-pointer
  "
    >
      {" "}
      {genre}
    </button>
  );
}
