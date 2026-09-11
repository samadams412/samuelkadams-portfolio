import type { ReactNode } from "react";

// Single source of truth for page content width/padding so header, footer,
// and page content stay visually aligned instead of repeating max-w-* utilities.
export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
