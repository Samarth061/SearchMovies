import Sidebar from "./sidebar/Sidebar";

export default function HomePage() {
  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar />
      <div className="flex-1 flex w-full p-4 lg:p-6 bg-semantic-background-primary overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto">
          {/* Main content area - responsive grid or flex layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {/* Placeholder content for responsive testing */}
          </div>
        </div>
      </div>
    </div>
  );
}

//Card Example
{
  /* <div className="bg-semantic-background-card p-4 rounded-lg border border-semantic-border-default">
  <h3 className="text-semantic-text-primary font-semibold mb-2">
    Movie Card 4
  </h3>
  <p className="text-semantic-text-secondary text-sm">Sample movie content</p>
</div>; */
}
