import React from "react";

export default function ShowMovies() {
  let number = [6, 9, 12];

  return (
    <div>
      <div>
        <h2 className="text-xl font-geist-sans font-semibold text-semantic-text-primary">
          Show Movies
        </h2>
        <div className="grid grid-cols-3 gap-2 mt-4">
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
    <div className="bg-semantic-accent-primary rounded-lg text-center p-1 flex items-center justify-center hover:bg-semantic-accent-secondary hover:border-semantic-accent-focus transition-colors cursor-pointer aspect-square w-18 border-2 border-semantic-border-default">
      <p className="text-2xl font-geist-sans font-semibold text-semantic-text-primary ">
        {number}
      </p>
    </div>
  );
}
