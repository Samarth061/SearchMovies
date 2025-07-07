import React from "react";

export default function ShowMovies() {
  let number = [6, 9, 12];

  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold ">Show Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {number.map((number, index) => (
            <MovieButton key={index} number={number} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MovieButton({ number }: any) {
  return (
    <div className=" bg-semantic-accent-primary rounded-lg text-center">
      <p className="text-xl font-semibold">{number}</p>
    </div>
  );
}
