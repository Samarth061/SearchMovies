"use client";

import React from "react";
import Slider from "./Slider";
import ShowMovies from "./ShowMovies";

interface FlyoutMenuProps {
  isOpen: boolean;
}

export default function FlyoutMenu({}: FlyoutMenuProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Duration Slider */}
      <div className="w-full">
        <Slider
          htmlFor={"duration-slider"}
          title="Duration"
          min={60}
          max={240}
          step={15}
          unit="min"
        />
      </div>

      {/* Rating Slider */}
      <div className="w-full">
        <Slider
          htmlFor={"rating-slider"}
          title="Rating"
          min={0}
          max={10}
          step={0.1}
          unit=""
        />
      </div>

      {/* Show Movies */}
      <div className="w-full">
        <ShowMovies />
      </div>
    </div>
  );
}
