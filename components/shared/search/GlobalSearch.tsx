"use client";
import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalResult from "./GlobalResult";

function GlobalSearch() {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const query = searchParams.get("global");

  const [search, setSearch] = useState(query || "");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div className="relative w-full max-w-[600px] py-3 max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[50px] grow items-center gap-1 rounded-xl px-4 ">
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
          className="paragraph-regular text-dark400_light700 no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />
      </div>
      {isModalOpen && <GlobalResult />}
    </div>
  );
}

export default GlobalSearch;
