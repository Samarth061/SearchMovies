"use client";

import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import { SidebarProvider } from "./contexts/SidebarContext";
import { MovieFiltersProvider } from "./contexts/MovieFiltersContext";

function LayoutClientContent({ children }: { children: React.ReactNode }) {
  const [isInitialized] = useState(true);

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen p-4 bg-semantic-background-primary">
        {isInitialized ? (
          children
        ) : (
          <div className="flex items-center justify-center h-screen">
            <div className="text-semantic-text-muted">Loading...</div>
          </div>
        )}
      </main>
      <Footer />
      <Sidebar />
    </>
  );
}

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MovieFiltersProvider>
      <SidebarProvider>
        <LayoutClientContent>{children}</LayoutClientContent>
      </SidebarProvider>
    </MovieFiltersProvider>
  );
}
