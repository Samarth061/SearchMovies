import React from "react";

export default function ShowMovies() {
  const number = [6, 9, 12];

  return (
    <div>
      <div>
        <h2 className="text-lg sm:text-xl font-geist-sans font-semibold text-semantic-text-primary">
          Show Movies
        </h2>
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4">
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
    <div className="bg-semantic-accent-primary rounded-lg text-center p-1 sm:p-2 flex items-center justify-center hover:bg-semantic-accent-secondary hover:border-semantic-accent-focus transition-all duration-200 cursor-pointer aspect-square w-14 sm:w-16 lg:w-18 border-2 border-semantic-border-default">
      <p className="text-lg sm:text-xl lg:text-2xl font-geist-sans font-semibold text-semantic-text-primary">
        {number}
      </p>
    </div>
  );
}
