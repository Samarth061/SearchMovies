import {
  ActionMoviesCarousel,
  FeaturedMoviesCarousel,
} from "./features/movies/components/MovieCarousels";
import Sidebar from "./components/layout/sidebar/Sidebar";
import MovieList from "./components/ui/MovieList";

export default function HomePage() {
  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar />
      <div className="flex-1 flex flex-row h-full">
        <ActionMoviesCarousel />
        <MovieList />
      </div>
    </div>
  );
}
