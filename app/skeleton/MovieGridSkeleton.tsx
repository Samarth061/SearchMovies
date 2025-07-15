export default function MovieGridSkeleton() {
  return (
    <div className="h-full w-full max-w-[1440px] flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-semantic-text-secondary text-lg mb-4">
          Loading movies...
        </p>
        <div className="animate-pulse grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="bg-semantic-background-secondary rounded-lg aspect-[2/3] w-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}