"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { themes } from "@/constants";

export function ThemeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <div className="mb-2 flex justify-around gap-1  rounded-lg bg-dark-400 p-1 align-middle">
      {themes
        .filter((item) => item.value !== "system") // Exclude "system" items
        .map((item) => (
          <button
            key={item.value}
            onClick={() => {
              setMode(item.value);
              localStorage.theme = item.value;
            }}
            className={cn(
              "flex-1 items-center gap-2 px-3 py-2 rounded-lg transition-colors",
              mode === item.value
                ? "bg-dark-500 text-light-900"
                : "text-light-400 hover:bg-slate-100 "
            )}>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${mode === item.value && "active-theme"}`}
              />
            </div>
            {/* <span className={`text-sm text-light-900`}>{item.label}</span> */}
          </button>
        ))}
    </div>
  );
}
