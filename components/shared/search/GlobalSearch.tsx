"use client";
import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import GlobalResult from "./GlobalResult";
import { Button } from "@/components/ui/button";
import { openAtom } from "@/lib/state/atom";
import { useRecoilState } from "recoil";

function GlobalSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchContainerRef = useRef(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("global");

  const [search, setSearch] = useState(query || "");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (
        searchContainerRef.current &&
        // @ts-ignore
        !searchContainerRef.current.contains(e.target)
      ) {
        setIsModalOpen(false);
        setSearch("");
      }
    };
    setIsModalOpen(false);
    document.addEventListener("click", handleOutsideClick);
    // return () => document.removeEventListener("click", handleOutsideClick);
  }, [pathname]);

  useEffect(() => {
    const delayDebounceFun = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "global",
          value: search,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (query) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ["global", "type"],
          });
          router.push(newUrl);
        }
      }
    }, 300);
    return () => clearTimeout(delayDebounceFun);
  }, [query, search, router, pathname, searchParams]);
  const [, setOpen] = useRecoilState(openAtom);
  return (
    <div
      className="absolute w-full max-w-[600px] py-3"
      ref={searchContainerRef}>
      <Button className="mb-5 bg-zinc-300" onClick={() => setOpen(false)}>
        ESC
      </Button>
      <div className="flex min-h-[50px]">
        <div className="relative flex w-full grow items-center gap-1 rounded-xl bg-slate-300 px-4">
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            height={24}
            width={24}
            className="cursor-pointer"
          />
          <Input
            type="text"
            placeholder="Search globally"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (!isModalOpen) {
                setIsModalOpen(true);
              }
              if (e.target.value === "" && isModalOpen) {
                setIsModalOpen(false);
              }
            }}
            className="paragraph-regular no-focus placeholder border-none bg-transparent text-black shadow-none outline-none"
          />
        </div>
      </div>
      {isModalOpen && <GlobalResult />}
    </div>
  );
}

export default GlobalSearch;
