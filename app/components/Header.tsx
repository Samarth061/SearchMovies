export default function Header() {
  return (
    <header className="w-full bg-semantic-background-secondary backdrop-blur-sm border-b border-semantic-border-default shadow-lg shadow-semantic-border-default/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex flex-row gap-8">
            <div className="flex items-center space-x-3">
              <a
                href="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <img
                  className="w-10 h-10"
                  src="/movie-svgrepo-com.svg"
                  alt="Movie Clapboard"
                />
                <h1 className="text-2xl font-bold text-semantic-text-primary tracking-tight">
                  CinMatch
                </h1>
              </a>
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
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
            <form action="./search/" className="flex items-center space-x-2">
              <input
                type="search"
                id="movie"
                name="q"
                placeholder="Search movies..."
                className="px-4 py-2 bg-semantic-background-elevated border border-semantic-border-default rounded-lg text-semantic-text-primary placeholder-semantic-text-muted focus:outline-none focus:ring-2 focus:ring-semantic-border-focus focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="bg-semantic-accent-primary hover:bg-semantic-accent-secondary text-semantic-text-primary font-semibold py-2 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
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
