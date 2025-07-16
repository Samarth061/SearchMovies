export interface CarouselItem {
  id: string;
  title: string;
  image: string;
  description?: string;
  rating?: number;
  trailerYouTubeId?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
  className?: string;
}
