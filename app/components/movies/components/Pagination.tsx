interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 4;

    // Simple 4-page grouping logic
    const groupIndex = Math.floor((currentPage - 1) / maxVisiblePages);
    const startPage = groupIndex * maxVisiblePages + 1;
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    // Generate exactly 4 consecutive page buttons (or fewer if at the end)
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`w-10 h-10  font-semibold transition-all duration-300 transform hover:scale-105 ${
            currentPage === i
              ? "bg-semantic-accent-primary text-semantic-text-primary shadow-lg"
              : "bg-semantic-background-button text-semantic-text-secondary hover:bg-semantic-accent-secondary hover:text-semantic-text-primary"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center gap-2">
        {/* Previous Arrow Button */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`w-10 h-10  font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
            currentPage === 1
              ? "bg-semantic-background-primary text-semantic-text-muted cursor-not-allowed"
              : "bg-semantic-background-elevated text-semantic-text-secondary hover:bg-semantic-accent-secondary hover:text-semantic-text-primary"
          }`}
          aria-label="Previous page"
        >
          ←
        </button>

        {/* Page Numbers */}
        {pages}

        {/* Next Arrow Button */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
            currentPage === totalPages
              ? "bg-semantic-background-primary text-semantic-text-muted cursor-not-allowed"
              : "bg-semantic-background-elevated text-semantic-text-secondary hover:bg-semantic-accent-secondary hover:text-semantic-text-primary"
          }`}
          aria-label="Next page"
        >
          →
        </button>
      </div>
    );
  };

  return (
    <div className="mt-1 p-3">
      {renderPagination()}
    </div>
  );
}