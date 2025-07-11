"use client";

import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import { SidebarProvider, useSidebar } from "./contexts/SidebarContext";

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const [isInitialized] = useState(true);
  const { isSidebarOpen, closeSidebar } = useSidebar();

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
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </SidebarProvider>
  );
}
