import Carousel from "../components/Carousel";
import {
  dummyCarouselItems,
  actionMovieCarousel,
  fallbackCarouselItems,
} from "../data/carouselData";

export function FeaturedMoviesCarousel() {
  return (
    <div className="h-full w-1/2 flex flex-col">
      <div className="flex-1 p-6">
        <Carousel
          items={dummyCarouselItems}
          autoPlay={true}
          showIndicators={true}
          showControls={true}
          customDimensions={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}

export function ActionMoviesCarousel() {
  return (
    <div className="h-full w-1/2 flex flex-col">
      <div className="flex-1 p-6">
        <Carousel
          items={actionMovieCarousel}
          autoPlay={true}
          showIndicators={true}
          showControls={true}
          customDimensions={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}

export function FallbackCarousel() {
  return (
    <div className="h-full mb-8 flex flex-col">
      <h2 className="text-2xl font-bold text-semantic-text-primary mb-4">
        Fallback Carousel
      </h2>
      <div className="flex-1">
        <Carousel
          items={fallbackCarouselItems}
          autoPlay={true}
          showIndicators={false}
          showControls={false}
          customDimensions={{
            width: "100%",
            height: "100%",
            maxWidth: "800px",
          }}
        />
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
