"use client";

import * as React from "react";

import GlobalSearch from "../search/GlobalSearch";

export function CommandCard() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }

      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div
      className={` absolute left-1/2 top-10  h-1/2 w-full max-w-2xl -translate-x-1/2 
      overflow-auto rounded-lg border p-3 shadow-md backdrop-blur-sm ${
        !open && "hidden"
      }`}>
      <GlobalSearch />
    </div>
  );
}
