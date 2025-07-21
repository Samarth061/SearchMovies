"use client";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { useBreakpoints } from "@/app/hooks/useBreakpoints";

export default function MovieGridSkeleton({
  count = 8,
}: {
  count?: number;
}) {
  const { screenSize, isMobile } = useBreakpoints();
  
  // Map screen sizes to Tailwind grid classes (matching MovieGrid logic)
  const getGridClass = () => {
    switch (screenSize) {
      case "xs":
      case "sm":
        return "grid-cols-2";
      case "md":
      case "lg":
      case "xl":
      default:
        return "grid-cols-4";
    }
  };
  
  const gridClass = getGridClass();
  const gapClass = isMobile ? "gap-4" : "gap-6";

  return (
    <div className={`grid ${gridClass} pt-3 ${gapClass} justify-items-center auto-rows-fr`}>
      {Array.from({ length: count }).map((_, idx) => (
        <MovieCardSkeleton key={idx} />
      ))}
    </div>
  );
}
