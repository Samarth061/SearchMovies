import { useState, useEffect, useMemo } from "react";

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
  itemsPerPage: number;
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
  itemsPerPage,
  resetTrigger,
}: UsePaginationProps): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset current page when resetTrigger changes (e.g., screen size)
  useEffect(() => {
    setCurrentPage(1);
  }, [resetTrigger]);

  // Calculate pagination values
  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    return {
      totalPages,
      currentItems,
    };
  }, [items, itemsPerPage, currentPage]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= paginationData.totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentPage,
    totalPages: paginationData.totalPages,
    currentItems: paginationData.currentItems,
    goToPage,
  };
}