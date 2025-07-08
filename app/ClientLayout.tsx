"use client";

import { useState } from "react";
import { CollapsedContext } from "./context/CollapsedContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <CollapsedContext.Provider value={{ collapsed, setCollapsed }}>
      <Header />
      <main className="flex-1 overflow-auto">{children}</main>
      <Footer />
    </CollapsedContext.Provider>
  );
}
