"use client";
import {
  ActionMoviesCarousel,
  FeaturedMoviesCarousel,
} from "./features/movies/components/MovieCarousels";
import Sidebar from "./components/layout/sidebar/Sidebar";
import MovieList from "./components/ui/MovieList";
import { useCollapsed } from "./context/CollapsedContext";

export default function HomePage() {
  const { collapsed } = useCollapsed();

  return (
    <div className="flex flex-row w-full h-full">
      {!collapsed && <Sidebar />}
      <div className="flex-1 flex flex-row h-full">
        <ActionMoviesCarousel />
        <MovieList />
      </div>
    </div>
  );
}
