"use client";
import { useCollapsed } from "../../context/CollapsedContext";

import { useState } from "react";

export default function Header() {
  const { collapsed, setCollapsed } = useCollapsed();

  function onClick() {
    setCollapsed(!collapsed);
    console.log(collapsed);
  }

  return (
    <header className="w-full bg-semantic-background-secondary backdrop-blur-sm border-b border-semantic-border-default shadow-lg shadow-semantic-border-default/20">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex flex-row gap-2 sm:gap-8 ">
            <button
              onClick={() => onClick()}
              className="text-4xl p-4 focus:outline-none mb-1 transform transition-all duration-300 ease-in-out cursor-pointer "
            >
              ☰
            </button>
            <div className="flex items-center space-x-4 sm:space-x-3 p-4">
              <a
                href="/"
                className="flex items-center space-x-1 sm:space-x-2 hover:opacity-80 transition-opacity"
              >
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  src="/movie-svgrepo-com.svg"
                  alt="Movie Clapboard"
                />
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-semantic-text-primary tracking-tight">
                  CinMatch
                </h1>
              </a>
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a
                href="/"
                className="text-semantic-text-secondary hover:text-semantic-text-primary transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="/movies"
                className="text-semantic-text-secondary hover:text-semantic-text-primary transition-colors font-medium"
              >
                Movies
              </a>
              <a
                href="/series"
                className="text-semantic-text-secondary hover:text-semantic-text-primary transition-colors font-medium"
              >
                Series
              </a>
              <a
                href="/about"
                className="text-semantic-text-secondary hover:text-semantic-text-primary transition-colors font-medium"
              >
                About
              </a>
            </nav>
          </div>

          {/* Search */}
          <div className="flex items-center">
            <form
              action="./search/"
              className="flex items-center space-x-1 sm:space-x-2"
            >
              <input
                type="search"
                id="movie"
                name="q"
                placeholder="Search movies..."
                className="w-32 sm:w-48 md:w-64 px-2 sm:px-4 py-2 bg-semantic-background-elevated border border-semantic-border-default rounded-lg text-semantic-text-primary placeholder-semantic-text-muted focus:outline-none focus:ring-2 focus:ring-semantic-border-focus focus:border-transparent transition-all text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-semantic-accent-primary hover:bg-semantic-accent-secondary text-semantic-text-primary font-semibold py-2 px-3 sm:px-6 rounded-lg transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
