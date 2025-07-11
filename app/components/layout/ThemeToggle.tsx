"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false); // Default to light theme (theme1)
  const [mounted, setMounted] = useState(false);

  // Handle mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isTheme2 = savedTheme === 'theme2';
      setIsDark(isTheme2);
      document.documentElement.className = savedTheme;
    } else {
      // Default to theme1 (light)
      setIsDark(false);
      document.documentElement.className = 'theme1';
      localStorage.setItem('theme', 'theme1');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'theme1' : 'theme2';
    const newIsDark = !isDark;
    
    setIsDark(newIsDark);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="w-12 h-6 bg-semantic-background-elevated rounded-full animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center w-12 h-6 bg-semantic-background-elevated border border-semantic-border-default rounded-full transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-semantic-accent-primary focus:ring-offset-2 focus:ring-offset-semantic-background-primary"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {/* Toggle Circle */}
      <div
        className={`absolute w-5 h-5 bg-semantic-accent-primary rounded-full shadow-lg transform transition-all duration-300 flex items-center justify-center ${
          isDark ? 'translate-x-6' : 'translate-x-0.5'
        }`}
      >
        {/* Icon */}
        <div className="w-3 h-3 flex items-center justify-center">
          {isDark ? (
            // Moon Icon (Dark Theme Active)
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            // Sun Icon (Light Theme Active)
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Background Track */}
      <div className="absolute inset-0 rounded-full opacity-50">
        <div className={`w-full h-full rounded-full transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-semantic-background-secondary to-semantic-background-button' 
            : 'bg-gradient-to-r from-semantic-accent-warm to-semantic-accent-secondary'
        }`}></div>
      </div>
    </button>
  );
}