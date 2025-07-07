import Carousel from "../components/Carousel";
import {
  dummyCarouselItems,
  actionMovieCarousel,
  horrorMovieCarousel,
  fallbackCarouselItems,
  singleItemCarousel,
  emptyCarousel,
} from "../data/carouselData";

export function FeaturedMoviesCarousel() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-semantic-text-primary mb-4">
        Featured Movies
      </h2>
      <Carousel
        items={dummyCarouselItems}
        autoPlay={true}
        autoPlayInterval={5000}
        showIndicators={true}
        showControls={true}
      />
    </div>
  );
}

export function ActionMoviesCarousel() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-semantic-text-primary mb-4">
        Action Movies
      </h2>
      <Carousel
        items={actionMovieCarousel}
        autoPlay={false}
        showIndicators={true}
        showControls={true}
        className="max-w-4xl mx-auto"
      />
    </div>
  );
}

export function HorrorMoviesCarousel() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-semantic-text-primary mb-4">
        Horror Movies
      </h2>
      <Carousel
        items={horrorMovieCarousel}
        autoPlay={true}
        autoPlayInterval={3000}
        showIndicators={false}
        showControls={true}
      />
    </div>
  );
}

export function MinimalCarousel() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-semantic-text-primary mb-4">
        Minimal Carousel
      </h2>
      <Carousel
        items={fallbackCarouselItems}
        autoPlay={true}
        showIndicators={false}
        showControls={false}
        className="h-64"
      />
    </div>
  );
}

export function SingleItemCarousel() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-semantic-text-primary mb-4">
        Single Item
      </h2>
      <Carousel
        items={singleItemCarousel}
        autoPlay={true}
        showIndicators={true}
        showControls={true}
      />
    </div>
  );
}

export function EmptyCarousel() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-semantic-text-primary mb-4">
        Empty State
      </h2>
      <Carousel
        items={emptyCarousel}
        autoPlay={true}
        showIndicators={true}
        showControls={true}
      />
    </div>
  );
}

// Complete example page component
export default function CarouselExamples() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <FeaturedMoviesCarousel />
      <ActionMoviesCarousel />
      <HorrorMoviesCarousel />
      <MinimalCarousel />
      <SingleItemCarousel />
      <EmptyCarousel />
    </div>
  );
}
