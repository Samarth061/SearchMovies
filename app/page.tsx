import {
  ActionMoviesCarousel,
  FeaturedMoviesCarousel,
} from "./examples/CarouselExample";
import Sidebar from "./sidebar/Sidebar";

export default function HomePage() {
  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar />
      <div className="flex-1 h-full">
        <ActionMoviesCarousel />
      </div>
    </div>
  );
}
