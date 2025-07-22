"use client";

import { useState } from "react";

interface SliderProps {
  htmlFor: string;
  title: string;
  min: number;
  max: number;
  step: number;
  unit?: string;
  handleSliderChange?: (value: number) => void;
}
export default function Slider({
  htmlFor,
  title,
  min,
  max,
  step,
  unit = "",
  handleSliderChange,
}: SliderProps) {
  const [value, setValue] = useState(max / 2);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    if (handleSliderChange) handleSliderChange(newValue);
  }
  // Calculate percentage position
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full px-1 sm:px-2">
      <label htmlFor={htmlFor} className="block mb-2 sm:mb-3">
        <h2 className="text-lg sm:text-xl font-geist-sans font-semibold text-semantic-text-primary">
          {title}
        </h2>
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
          onChange={onChange}
          className="custom-slider"
        />

        {/* Value below thumb */}
        <div
          className="absolute text-sm sm:text-base text-semantic-text-primary font-semibold -bottom-5 sm:-bottom-6 transition-all"
          style={{
            left: `calc(${percent}% - 8px)`, // subtract to center it
          }}
        >
          {value}
          {unit}
        </div>
      </div>
    </div>
  );
}
