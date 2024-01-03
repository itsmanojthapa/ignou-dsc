"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { HomePageFilters } from "../../constants/filters";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { formUrlQuery } from "@/lib/utils";

const HomeFilters = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("filter");
  const [active, setActive] = useState(query || "");
  const router = useRouter();

  const handleFilterClick = (item: string) => {
    if (active === item) {
      setActive("");
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: null,
      });
      router.push(newUrl, { scroll: false });
    } else {
      setActive(item);
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: item.toLowerCase(),
      });
      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          className={`${
            active === item.value
              ? "primary-gradient text-light-900"
              : "text-dark100_light900 background-light700_dark400"
          } body-medium rounded-lg px-6 py-3 capitalize shadow-none`}
          key={item.value}
          onClickCapture={() => {
            handleFilterClick(item.value);
          }}>
          {item.name}
        </Button>
      ))}
    </div>
  );
};
export default HomeFilters;
