"use client";
import React from "react";
import GenreButton from "./components/GenreButton";
import Slider from "./components/Slider";
import ShowMovies from "./components/ShowMovies";

export default function Sidebar() {
  let genres = ["Action", "Comedy", "Sci-fi", "Drama", "Thriller", "Romance"];

  return (
    <>
      <div className="w-86 flex-shrink-0 flex flex-col h-full p-4 bg-semantic-background-primary gap-4 border-r-2 border-semantic-border-default ">
        <div>
          <h1 className="text-3xl font-geist-sans font-bold text-semantic-text-primary">
            Search Parameters
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {genres.map((genre, index) => (
              <GenreButton key={index} genre={genre} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Slider
            htmlFor={"duration-slider"}
            title="Duration"
            min={60}
            max={240}
            step={15}
            unit="min"
          />

          <Slider
            htmlFor={"rating-slider"}
            title="Rating"
            min={0}
            max={10}
            step={0.1}
            unit=""
          />
        </div>

        {/* Spacer to push ShowMovies to bottom */}
        <div className="flex-1"></div>

        <div>
          <ShowMovies />
        </div>
      </div>
    </>
  );
}
