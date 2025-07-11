import React from "react";

export default function ShowMovies() {
  const number = [6, 9, 12];

  return (
    <div>
      <div>
        <h2 className="text-sm sm:text-lg font-geist-sans font-semibold text-semantic-text-primary mb-2">
          Show Movies
        </h2>
        <div className="grid grid-cols-3 gap-1 sm:gap-2">
          {number.map((number, index) => (
            <MovieButton key={index} number={number} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface MovieButtonProps {
  number: number;
}

function MovieButton({ number }: MovieButtonProps) {
  return (
    <div className="bg-semantic-accent-primary rounded-md text-center p-1 flex items-center justify-center hover:bg-semantic-accent-secondary hover:border-semantic-accent-focus transition-all duration-200 cursor-pointer aspect-square w-10 sm:w-12 border-2 border-semantic-border-default">
      <p className="text-sm sm:text-base font-geist-sans font-semibold text-semantic-text-primary">
        {number}
      </p>
    </div>
  );
}
