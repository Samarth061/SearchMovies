"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-[1440px] mx-auto bg-semantic-background-secondary/40 hover:bg-semantic-background-secondary transition-colors duration-400 ease-in-out backdrop-blur-sm  shadow-semantic-border-default/20 shadow-xl sticky top-0 z-50">
      <div className="max-w-10xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo and Navigation */}
          <div className="flex flex-row items-center gap-2 sm:gap-4 lg:gap-8">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link
                href="/"
                className="flex items-center space-x-1 sm:space-x-2 hover:opacity-80 transition-opacity"
              >
                <Image
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 hidden"
                  src="/movie-svgrepo-com.svg"
                  alt="Movie Clapboard"
                  width={40}
                  height={40}
                />
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-semantic-text-primary hover:text-semantic-accent-secondary tracking-tight">
                  CinMatch
                </h1>
              </Link>
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              <Link
                href="/"
                className="text-semantic-text-secondary hover:text-semantic-accent-secondary transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/movies"
                className="text-semantic-text-secondary hover:text-semantic-accent-secondary transition-colors font-medium"
              >
                Movies
              </Link>
              <Link
                href="/series"
                className="text-semantic-text-secondary hover:text-semantic-accent-secondary transition-colors font-medium"
              >
                Series
              </Link>
              <Link
                href="/about"
                className="text-semantic-text-secondary hover:text-semantic-accent-secondary transition-colors font-medium"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Search */}
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl ml-2 sm:ml-4 md:ml-6 lg:ml-8">
            {/* Theme Toggle */}
            <div className="flex items-center ml-2 sm:ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
