import Image from "next/image";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./dashboard/dashboard";
import Carousel from "./components/Carousel";
import {
  EmptyCarousel,
  FeaturedMoviesCarousel,
  HorrorMoviesCarousel,
  MinimalCarousel,
} from "./examples/CarouselExample";
import { dummyCarouselItems } from "./data/carouselData";

export default function Home() {
  return (
    <div className="w-full">
      <Sidebar />
      {/* <Dashboard /> */}
    </div>
  );
}
