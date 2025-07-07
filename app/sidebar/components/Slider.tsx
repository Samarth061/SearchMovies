"use client";

import { useState } from "react";

interface SliderProps {
  htmlFor: string;
  title: string;
  min: number;
  max: number;
  step: number;
}
export default function Slider({
  htmlFor,
  title,
  min,
  max,
  step,
}: SliderProps) {
  const [value, setValue] = useState(max / 2);

  // Calculate percentage position
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-md mx-auto ">
      <label htmlFor={htmlFor} className="block mb-2 text-xl">
        <h2 className="text-lg font-semibold">{title}</h2>
      </label>

      <div className="relative w-full">
        {/* Slider */}
        <input
          id="rating-slider"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className="custom-slider"
        />

        {/* Value below thumb */}
        <div
          className="absolute text-md text-semantic-text-primary font-semibold -bottom-6 transition-all"
          style={{
            left: `calc(${percent}% - 6px)`, // subtract to center it
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
