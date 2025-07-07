"use client";
import React from "react";
import GenreButton from "./components/GenreButton";
import Slider from "./components/Slider";
import ShowMovies from "./components/ShowMovies";

export default function Sidebar() {
  let genres = ["Action", "Comedy", "Sci-fi", "Drama", "Thriller", "Romance"];

  return (
    <>
      <div className="flex flex-col w-xs p-4 bg-semantic-background-secondary h-full gap-4">
        <div>
          <h1 className="text-2xl font-medium">Search Parameters</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {genres.map((genre, index) => (
              <GenreButton key={index} genre={genre} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <Slider
            htmlFor={"duration-slider"}
            title="Duration"
            min={0}
            max={10}
            step={0.5}
          />

          <Slider
            htmlFor={"rating-slider"}
            title="Rating"
            min={0}
            max={10}
            step={0.5}
          />
        </div>
        <div>
          <ShowMovies />
        </div>
      </div>
    </>
  );
}
