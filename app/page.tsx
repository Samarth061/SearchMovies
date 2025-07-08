"use client";
import {
  ActionMoviesCarousel,
} from "./features/movies/components/MovieCarousels";
import Sidebar from "./components/layout/sidebar/Sidebar";
import MovieList from "./components/ui/MovieList";
import { useCollapsed } from "./context/CollapsedContext";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { collapsed, setCollapsed } = useCollapsed();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth < 768; // md breakpoint
      setIsSmallScreen(isSmall);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const showSidebar = !collapsed;

  return (
    <div className="flex flex-row w-full h-full">
      {showSidebar && (
        <div className="relative">
          <Sidebar />
          {/* Overlay for mobile when sidebar is open */}
          {isSmallScreen && (
            <div 
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={() => setCollapsed(true)}
              aria-label="Close sidebar"
            />
          )}
        </div>
      )}
      <div className="flex-1 flex flex-row h-full">
        <ActionMoviesCarousel />
        <MovieList />
      </div>
    </div>
  );
}
