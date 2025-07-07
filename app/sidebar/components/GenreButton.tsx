import React from "react";

interface GenreButtonProps {
  genre: string;
}

export default function GenreButton({ genre }: GenreButtonProps) {
  return (
    <button className="rounded-full bg-semantic-accent-primary text-semantic-text-primary px-3 py-2">
      {genre}
    </button>
  );
}
