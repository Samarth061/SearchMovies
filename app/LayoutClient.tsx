"use client";

import { useState, ReactElement, cloneElement, isValidElement } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Clone children and pass toggleSidebar prop
  const childrenWithProps = isValidElement(children)
    ? cloneElement(children as ReactElement<any>, { toggleSidebar })
    : children;

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen p-4 bg-semantic-background-primary">
        {childrenWithProps}
      </main>
      <Footer />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}
