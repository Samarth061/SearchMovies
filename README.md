# 🎥 Movie Recommendation Frontend

A responsive movie recommendation website built with Next.js, TailwindCSS, and TMDB API. Users can search, filter, and explore movies, including a hand-curated featured list. Designed with scalability in mind for future database integration, authentication, and recommendations.

---

## 🚀 Features

### 🔍 Search & Filter Movies

- Search by **movie name**
- Filter by:
  - **Genres** (multi-select)
  - **Rating** (slider)
  - **Duration** (slider)
- Sort movies by:
  - Release Date
  - Popularity
  - Ratings

---

### 🌟 Curated Featured List

- Manually curated featured movies served from a local JSON file (acts as a mock API).
- Displayed on the home page in a dedicated section.

---

### 📄 Movie Listing Page

- Paginated movie list with options to view **9, 12, or 15** movies per page.
- Each movie card includes:
  - Poster image
  - Title
  - Release date
  - Rating

---

### 🎬 Movie Detail Page

- Detailed view of selected movie:
  - Description
  - Cast
  - Genres/Themes
  - Embedded Trailer (YouTube or TMDB link)

---

### ⚡ Caching & Performance

- Uses **SWR** for data fetching and caching to improve performance and reduce API calls.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** TailwindCSS
- **API:** TMDB API + Local JSON for featured movies
- **Data Fetching:** SWR

---

## ✨ Additional Features

- Responsive design (mobile, tablet, desktop)
- Skeleton loaders during data fetch
- Error and empty state handling
- Optional dark mode
- "Back to Top" button
- Accessible UI

---

## 🗺️ Pages

- `/` – Home + Featured + Search
- `/search` – Advanced search with filters
- `/movie/[id]` – Movie detail page

---

## 🚦 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

---

## 🏗️ Future Plans

- 🔐 **Authentication:** User login (email or social)
- 📦 **Backend:** Store favorites, user preferences
- ✨ **Recommendations:** Personalized based on favorites and history
- 🛠️ **Admin Panel:** Manage curated lists and categories

---

## ⚠️ Notes

- Be mindful of **TMDB API rate limits**.
- Keep API keys safe using environment variables.
- Includes basic SEO with Next.js.

---

## 📜 License

This project is open-source and free to use.
