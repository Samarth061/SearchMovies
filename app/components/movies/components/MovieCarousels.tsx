import Carousel from "./Carousel";
import {
  dummyCarouselItems,
  fallbackCarouselItems,
  featuredBackdropCarousel,
} from "../../../data/carouselData";

export function FeaturedMoviesCarousel() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex-1 p-3 md:p-2 flex items-center justify-center">
        <div className="w-full max-w-[1280px] mx-auto aspect-video">
          <Carousel
            items={dummyCarouselItems}
            autoPlay={true}
            showIndicators={true}
            showControls={true}
          />
        </div>
      </div>
    </div>
  );
}

export function ActionMoviesCarousel() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="flex-1 p-3 md:p-2 flex items-center justify-center">
        <div className="w-full max-w-[1440px] mx-auto aspect-video">
          <Carousel
            items={featuredBackdropCarousel}
            autoPlay={true}
            showIndicators={true}
            showControls={true}
          />
        </div>
      </div>
    </div>
  );
}

export function FallbackCarousel() {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-2xl font-bold text-semantic-text-primary mb-4">
        Fallback Carousel
      </h2>
      <div className="flex-1 p-3 md:p-2 flex items-center justify-center">
        <div className="w-full max-w-[1440px] mx-auto aspect-video">
          <Carousel
            items={fallbackCarouselItems}
            autoPlay={true}
            showIndicators={true}
            showControls={true}
          />
        </div>
      </div>
    </div>
  );
}

// Complete example page component
export default function CarouselExamples() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <FeaturedMoviesCarousel />
      <ActionMoviesCarousel />
      <FallbackCarousel />
    </div>
  );
}
