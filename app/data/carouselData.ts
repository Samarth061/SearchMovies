import { CarouselItem } from "../components/movies/components/Carousel";
import { getTopRatedMovies } from "../lib/tmdb";

export async function getBackdropCarousel() {
  const topRatedMovies = await getTopRatedMovies();
  return topRatedMovies.map((movie) => ({
    id: movie.id.toString(),
    title: movie.title,
    image: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`,
    description: movie.overview,
    rating: Math.ceil(movie.vote_average * 10) / 10,
  }));
}

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
  {
    id: "10",
    title: "Avatar",
    image: "https://image.tmdb.org/t/p/w1280/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    description:
      "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  },
  {
    id: "11",
    title: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/w1280/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description:
      "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and save the universe.",
  },
  {
    id: "12",
    title: "Titanic",
    image: "https://image.tmdb.org/t/p/w1280/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
  },
  {
    id: "13",
    title: "The Lion King",
    image: "https://image.tmdb.org/t/p/w1280/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    description:
      "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
  },
  {
    id: "14",
    title: "Forrest Gump",
    image: "https://image.tmdb.org/t/p/w1280/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    description:
      "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man.",
  },
  {
    id: "15",
    title: "The Shawshank Redemption",
    image: "https://image.tmdb.org/t/p/w1280/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: "16",
    title: "Spider-Man: No Way Home",
    image: "https://image.tmdb.org/t/p/w1280/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
  },
  {
    id: "17",
    title: "Top Gun: Maverick",
    image: "https://image.tmdb.org/t/p/w1280/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission.",
  },
  {
    id: "18",
    title: "Black Panther",
    image: "https://image.tmdb.org/t/p/w1280/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    description:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and confront a challenger from his country's past.",
  },
  {
    id: "19",
    title: "Dune",
    image: "https://image.tmdb.org/t/p/w1280/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    description:
      "Paul Atreides leads nomadic tribes in a revolt against the evil House Harkonnen in this epic sci-fi adventure set on the desert planet Arrakis.",
  },
  {
    id: "20",
    title: "The Batman",
    image: "https://image.tmdb.org/t/p/w1280/74xTEgt1RkQG0X83Mw7VlF3MuE8.jpg",
    description:
      "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues in this dark take on the Caped Crusader.",
  },
];

// Alternative set with different genres
export const actionMovieCarousel: CarouselItem[] = [
  {
    id: "action-4",
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w780/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
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

// New 16:9 backdrop dataset for standardized carousels
export const featuredBackdropCarousel: CarouselItem[] = [
  {
    id: "backdrop-1",
    title: "The Shawshank Redemption",
    image: "https://image.tmdb.org/t/p/w1280/j9XKiZrVeViAixVRzCta7h1VU9W.jpg",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    rating: 9.3,
  },
  {
    id: "backdrop-2",
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    rating: 8.6,
  },
  {
    id: "backdrop-3",
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    description:
      "A thief who enters the dreams of others to steal secrets must plant an idea into the mind of a CEO.",
    rating: 8.8,
  },
  {
    id: "backdrop-4",
    title: "The Godfather",
    image: "https://image.tmdb.org/t/p/w1280/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    rating: 9.2,
  },
  {
    id: "backdrop-5",
    title: "Fight Club",
    image: "https://image.tmdb.org/t/p/w1280/hTExot1sfn7dHZjGrk0Aiwpntxt.jpg",
    description:
      "An insomniac office worker and a soap maker form an underground fight club that evolves into something much more.",
    rating: 8.8,
  },
];

export const actionBackdropCarousel: CarouselItem[] = [
  {
    id: "action-backdrop-1",
    title: "John Wick",
    image: "https://image.tmdb.org/t/p/w1280/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
    description:
      "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.",
  },
  {
    id: "action-backdrop-2",
    title: "Mad Max: Fury Road",
    image: "https://image.tmdb.org/t/p/w1280/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
  },
  {
    id: "action-backdrop-3",
    title: "Die Hard",
    image: "https://image.tmdb.org/t/p/w1280/aJCEIMX3xtXceC1xwz6kovowOqr.jpg",
    description:
      "A New York police officer tries to save his wife and several others taken hostage by German terrorists.",
  },
  {
    id: "action-backdrop-4",
    title: "Top Gun: Maverick",
    image: "https://image.tmdb.org/t/p/w1280/odM92ap21JyfVfc4F9O68tFbdJY.jpg",
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.",
  },
  {
    id: "action-backdrop-5",
    title: "Mission: Impossible - Fallout",
    image: "https://image.tmdb.org/t/p/w1280/8yqzkoHrTdbuVl4h7lB3YGnYjh8.jpg",
    description:
      "Ethan Hunt and his team race against time after a mission goes wrong.",
  },
];
