import { CarouselItem } from "../components/ui/Carousel";

export const dummyCarouselItems: CarouselItem[] = [
  {
    id: "1",
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w1280/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: "2",
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
  },
  {
    id: "3",
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w1280/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival in this epic science fiction film.",
  },
  {
    id: "4",
    title: "The Matrix",
    image: "https://image.tmdb.org/t/p/w1280/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description:
      "A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
  },
  {
    id: "5",
    title: "Pulp Fiction",
    image: "https://image.tmdb.org/t/p/w1280/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption in this Quentin Tarantino masterpiece.",
  },
  {
    id: "6",
    title: "The Godfather",
    image: "https://image.tmdb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son in this classic crime drama.",
  },
  {
    id: "7",
    title: "John Wick",
    image: "https://image.tmdb.org/t/p/w1280/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    description:
      "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.",
  },
  {
    id: "8",
    title: "Mad Max: Fury Road",
    image: "https://image.tmdb.org/t/p/w1280/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
  },
  {
    id: "9",
    title: "Die Hard",
    image: "https://image.tmdb.org/t/p/w1280/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
    description:
      "A New York police officer tries to save his wife and several others taken hostage by German terrorists.",
  },
];

// Alternative set with different genres
export const actionMovieCarousel: CarouselItem[] = [
  {
    id: "action-1",
    title: "John Wick",
    image: "https://image.tmdb.org/t/p/w1280/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    description:
      "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.",
  },
  {
    id: "action-2",
    title: "Mad Max: Fury Road",
    image: "https://image.tmdb.org/t/p/w1280/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
  },
  {
    id: "action-3",
    title: "Die Hard",
    image: "https://image.tmdb.org/t/p/w1280/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
    description:
      "A New York police officer tries to save his wife and several others taken hostage by German terrorists.",
  },
];

// Horror movie set
export const horrorMovieCarousel: CarouselItem[] = [
  {
    id: "horror-1",
    title: "The Conjuring",
    image: "https://image.tmdb.org/t/p/w1280/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    description:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.",
  },
  {
    id: "horror-2",
    title: "A Quiet Place",
    image: "https://image.tmdb.org/t/p/w1280/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    description:
      "A family is forced to live in silence while hiding from creatures that hunt by sound.",
  },
  {
    id: "horror-3",
    title: "Hereditary",
    image: "https://image.tmdb.org/t/p/w1280/p81a0dIN8Fz6IDNMnzqCLSjOLqS.jpg",
    description:
      "A grieving family is haunted by tragedy and disturbing secrets in this psychological horror film.",
  },
];

// Fallback data with placeholder images (for testing without internet)
export const fallbackCarouselItems: CarouselItem[] = [
  {
    id: "placeholder-1",
    title: "Featured Movie 1",
    image: "/placeholder-movie.jpg",
    description:
      "This is a placeholder description for the first featured movie in our carousel.",
  },
  {
    id: "placeholder-2",
    title: "Featured Movie 2",
    image: "/placeholder-movie.jpg",
    description:
      "This is a placeholder description for the second featured movie in our carousel.",
  },
  {
    id: "placeholder-3",
    title: "Featured Movie 3",
    image: "/placeholder-movie.jpg",
    description:
      "This is a placeholder description for the third featured movie in our carousel.",
  },
];

// Single item for testing minimal carousel
export const singleItemCarousel: CarouselItem[] = [
  {
    id: "single-1",
    title: "Solo Movie",
    image: "https://image.tmdb.org/t/p/w1280/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    description:
      "This carousel has only one item to test single-item behavior.",
  },
];

// Empty array for testing empty state
export const emptyCarousel: CarouselItem[] = [];
