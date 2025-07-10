import genres from "@/app/data/genreData";
import React from "react";
import GenreButton from "./sidebar/components/GenreButton";
import Slider from "./sidebar/components/Slider";
import ShowMovies from "./sidebar/components/ShowMovies";

export default function SearchControls() {
  return (
    <div className="flex flex-wrap justify-center items-end gap-6 lg:gap-8 p-3">
      {/* Genre buttons */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-4 justify-items-center">
        {genres.map((genre, index) => (
          <GenreButton key={index} genre={genre} />
        ))}
      </div>
      {/* Sliders */}
      <div className="min-w-[180px] lg:min-w-[200px]">
        <Slider
          htmlFor={"duration-slider"}
          title="Duration"
          min={60}
          max={240}
          step={15}
          unit="min"
        />
      </div>
      <div className="min-w-[180px] lg:min-w-[200px]">
        <Slider
          htmlFor={"rating-slider"}
          title="Rating"
          min={0}
          max={10}
          step={0.1}
          unit=""
        />
      </div>
      <ShowMovies />
    </div>
  );
}
