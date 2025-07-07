"use client";

import { useState } from "react";

interface SliderProps {
  htmlFor: string;
  title: string;
  min: number;
  max: number;
  step: number;
  unit?: string;
}
export default function Slider({
  htmlFor,
  title,
  min,
  max,
  step,
  unit = "",
}: SliderProps) {
  const [value, setValue] = useState(max / 2);

  // Calculate percentage position
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-xs sm:max-w-md mx-auto px-2 sm:px-0">
      <label htmlFor={htmlFor} className="block mb-2">
        <h2 className="text-xl font-geist-sans font-semibold text-semantic-text-primary">{title}</h2>
      </label>

      <div className="relative w-full">
        {/* Slider */}
        <input
          id={htmlFor}
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
          className="absolute text-base text-semantic-text-primary font-semibold -bottom-6 transition-all"
          style={{
            left: `calc(${percent}% - 8px)`, // subtract to center it
          }}
        >
          {value}{unit}
        </div>
      </div>
    </div>
  );
}
