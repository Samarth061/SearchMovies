"use client";
import { createContext, useContext } from "react";

export const CollapsedContext = createContext<{
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
} | null>(null);

export const useCollapsed = () => {
  const context = useContext(CollapsedContext);
  if (!context) throw new Error("useCollapsed must be used within provider");
  return context;
};
