"use client";
import React from "react";
import GenreButton from "./components/GenreButton";
import Slider from "./components/Slider";
import ShowMovies from "./components/ShowMovies";

export default function Sidebar() {
  const genres = ["Action", "Comedy", "Sci-fi", "Drama", "Thriller", "Romance"];

  return (
    <>
      <div className="w-64 sm:w-72 md:w-80 xl:w-86 flex-shrink-0 flex flex-col h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] md:h-full p-3 sm:p-4 bg-semantic-background-primary gap-3 sm:gap-4 border-r-2 border-semantic-border-default transition-all duration-300 ease-in-out md:relative md:z-auto fixed left-0 top-14 sm:top-16 md:top-0 z-40 md:shadow-none shadow-2xl">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-geist-sans font-bold text-semantic-text-primary">
            Search Parameters
          </h1>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mt-3 sm:mt-4">
            {genres.map((genre, index) => (
              <GenreButton key={index} genre={genre} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
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
