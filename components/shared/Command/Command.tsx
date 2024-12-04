"use client";

import * as React from "react";
import { useRecoilState } from "recoil";
import GlobalSearch from "../search/GlobalSearch";
import { openAtom } from "@/lib/state/atom";

export function CommandCard() {
  const [open, setOpen] = useRecoilState(openAtom);
  const searchRef = React.useRef<HTMLDivElement>(null);

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

    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={searchRef}
      // className={` absolute left-1/2 top-10  h-1/2 w-full max-w-2xl -translate-x-1/2
      // overflow-auto rounded-lg border p-3 shadow-md backdrop-blur-md ${
      //   !open && "hidden"
      // }`}
      className="">
      <div
        className={`${
          !open && "hidden"
        } fixed  inset-0 flex w-full justify-center bg-black/5 p-4 pt-10 backdrop-blur-sm`}>
        <GlobalSearch />
      </div>
    </div>
  );
}
