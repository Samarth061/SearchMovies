"use client";
import GenreButton from "./components/layout/sidebar/components/GenreButton";
import ShowMovies from "./components/layout/sidebar/components/ShowMovies";
import Slider from "./components/layout/sidebar/components/Slider";
import { ActionMoviesCarousel } from "./components/movies/components/MovieCarousels";
import MovieList from "./components/movies/components/MovieList";
import genres from "./data/genreData";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-1 w-full ">
        <ActionMoviesCarousel />
      </div>

      {/* Controls section */}
      <div className="w-full p-6">
        <div className="flex flex-wrap justify-center items-end gap-6 lg:gap-8">
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
      </div>
      <div className="flex">
        <MovieList />
      </div>
    </div>
  );
}
