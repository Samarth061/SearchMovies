"use client";

import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isInitialized, setIsInitialized] = useState(true);

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen p-4">
        {isInitialized ? (
          children
        ) : (
          <div className="flex items-center justify-center h-screen">
            <div className="text-semantic-text-muted">Loading...</div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
