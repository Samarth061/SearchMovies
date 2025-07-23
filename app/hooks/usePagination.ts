import { useEffect } from "react";

interface Movie {
  id: string;
  title: string;
  image: string;
  description: string;
  rating?: number;
  trailerYouTubeId?: string;
}

interface UsePaginationProps {
  items: Movie[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  resetTrigger?: unknown;
}

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  currentItems: Movie[];
  goToPage: (page: number) => void;
}

export function usePagination({
  items,
  totalPages,
  currentPage,
  onPageChange,
  resetTrigger,
}: UsePaginationProps): UsePaginationReturn {
  // Reset to page 1 when resetTrigger changes (e.g., screen size, filters)
  useEffect(() => {
    onPageChange(1);
  }, [resetTrigger, onPageChange]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return {
    currentPage,
    totalPages,
    currentItems: items,
    goToPage,
  };
}
