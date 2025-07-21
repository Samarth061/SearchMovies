"use client";

import genres from "@/app/data/genreData";

interface GenreButtonProps {
  genre: string;
  genreArray: number[];
  setGenreArray: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function GenreButton({
  genre,
  genreArray,
  setGenreArray,
}: GenreButtonProps) {
  const genreMap = new Map(genres.map((g) => [g.name, g.id]));
  const id = genreMap.get(genre);

  if (id === undefined) return null;

  const isSelected = genreArray.includes(id);

  const handleClick = () => {
    setGenreArray((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  return (
    <button
      className={`px-3 py-2 text-sm lg:text-lg 
      ${
        isSelected
          ? "bg-semantic-accent-secondary"
          : "bg-semantic-background-button hover:bg-semantic-accent-secondary"
      } 
      text-semantic-text-secondary hover:cursor-pointer border-2 border-transparent hover:border-semantic-accent-hot
      transition duration-200 truncate rounded snap-start flex-shrink-0`}
      onClick={handleClick}
    >
      {genre}
    </button>
  );
}
