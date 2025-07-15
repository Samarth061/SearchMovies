"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="max-w-[1440px] w-full mx-auto bg-semantic-background-secondary/40 hover:bg-semantic-background-secondary transition-colors duration-400 ease-in-out backdrop-blur-sm shadow-semantic-border-default/20 shadow-lg sticky top-0 z-50">
      <div className="max-w-10xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo and Navigation */}
          <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-4 lg:gap-8">
            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
              <Link
                href="/"
                className="flex items-center space-x-1 sm:space-x-2 hover:opacity-80 transition-opacity"
              >
                <Image
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 hidden"
                  src="/movie-svgrepo-com.svg"
                  alt="Movie Clapboard"
                  width={40}
                  height={40}
                />
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-semantic-text-primary hover:text-semantic-accent-secondary tracking-tight">
                  CinMatch
                </h1>
              </Link>
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
              <Link
                href="/"
                className="text-xs md:text-sm lg:text-base text-semantic-text-secondary hover:text-semantic-accent-secondary transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/movies"
                className="text-xs md:text-sm lg:text-base text-semantic-text-secondary hover:text-semantic-accent-secondary transition-colors font-medium"
              >
                Movies
              </Link>
              <Link
                href="/series"
                className="text-xs md:text-sm lg:text-base text-semantic-text-secondary hover:text-semantic-accent-secondary transition-colors font-medium"
              >
                Series
              </Link>
              <Link
                href="/about"
                className="text-xs md:text-sm lg:text-base text-semantic-text-secondary hover:text-semantic-accent-secondary transition-colors font-medium"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center ml-1 sm:ml-2 md:ml-4 lg:ml-8">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
