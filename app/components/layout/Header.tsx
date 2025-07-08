"use client";
import Image from "next/image";
import Link from "next/link";
import { useCollapsed } from "../../context/CollapsedContext";

export default function Header() {
  const { collapsed, setCollapsed } = useCollapsed();

  function onClick() {
    setCollapsed(!collapsed);
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <header className="w-full bg-semantic-background-secondary backdrop-blur-sm border-b border-semantic-border-default shadow-lg shadow-semantic-border-default/20 sticky top-0 z-50">
      <div className="max-w-10xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo and Navigation */}
          <div className="flex flex-row items-center gap-2 sm:gap-4 lg:gap-8">
            <button
              onClick={onClick}
              onKeyDown={handleKeyDown}
              className="text-2xl sm:text-3xl p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-semantic-border-focus focus:ring-offset-2 focus:ring-offset-semantic-background-secondary transform transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 active:scale-95 rounded-md"
              aria-label={collapsed ? "Expand menu" : "Collapse menu"}
              aria-expanded={!collapsed}
              role="button"
              tabIndex={0}
            >
              ☰
            </button>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link
                href="/"
                className="flex items-center space-x-1 sm:space-x-2 hover:opacity-80 transition-opacity"
              >
                <Image
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                  src="/movie-svgrepo-com.svg"
                  alt="Movie Clapboard"
                  width={40}
                  height={40}
                />
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-semantic-text-primary tracking-tight">
                  CinMatch
                </h1>
              </Link>
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              <Link
                href="/"
                className="text-semantic-text-secondary hover:text-semantic-text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/movies"
                className="text-semantic-text-secondary hover:text-semantic-text-primary transition-colors font-medium"
              >
                Movies
              </Link>
              <Link
                href="/series"
                className="text-semantic-text-secondary hover:text-semantic-text-primary transition-colors font-medium"
              >
                Series
              </Link>
              <Link
                href="/about"
                className="text-semantic-text-secondary hover:text-semantic-text-primary transition-colors font-medium"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Search */}
          <div className="flex items-center flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl ml-2 sm:ml-4 md:ml-6 lg:ml-8">
            <form
              action="./search/"
              className="flex items-stretch w-full gap-2"
            >
              <div className="relative flex-1 min-w-0">
                <label htmlFor="movie-search" className="sr-only">
                  Search movies, TV shows, and series
                </label>
                <input
                  type="search"
                  id="movie-search"
                  name="q"
                  placeholder="Search movies..."
                  autoComplete="off"
                  aria-label="Search movies, TV shows, and series"
                  className="w-full min-w-0 px-3 sm:px-4 py-2 bg-semantic-background-elevated border border-semantic-border-default rounded-md sm:rounded-lg text-semantic-text-primary placeholder-semantic-text-muted focus:outline-none focus:ring-2 focus:ring-semantic-border-focus focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="bg-semantic-accent-primary hover:bg-semantic-accent-secondary text-semantic-text-primary font-semibold px-4 sm:px-6 rounded-md sm:rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base whitespace-nowrap flex-shrink-0 flex items-center justify-center min-w-[3rem] sm:min-w-[5rem] border border-semantic-accent-primary hover:border-semantic-accent-secondary"
                aria-label="Search movies"
              >
                <span className="hidden sm:inline">Search</span>
                <Image
                  className=" h-6 w-6 "
                  src="/search-5-svgrepo-com.svg"
                  alt="Search Icon"
                  width={24}
                  height={24}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
