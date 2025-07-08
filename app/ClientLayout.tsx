"use client";

import { useState, useEffect } from "react";
import { CollapsedContext } from "./context/CollapsedContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(true); // Start collapsed by default
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Client-side only detection to avoid hydration issues
    const initialCollapsed = window.innerWidth < 768; // md breakpoint
    setCollapsed(initialCollapsed);
    setIsInitialized(true);
  }, []);

  return (
    <CollapsedContext.Provider value={{ collapsed, setCollapsed }}>
      <Header />
      <main className="flex-1 overflow-auto">
        {isInitialized ? children : (
          <div className="flex items-center justify-center h-full">
            <div className="text-semantic-text-muted">Loading...</div>
          </div>
        )}
      </main>
      <Footer />
    </CollapsedContext.Provider>
  );
}
