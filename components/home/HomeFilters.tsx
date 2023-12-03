"use client";

import { HomePageFilters } from "../../constants/filters";
import { Button } from "../ui/button";
import React from "react";

const HomeFilters = () => {
  const active = "recommended";
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
          onClick={() => {}}>
          {item.name}
        </Button>
      ))}
    </div>
  );
};
export default HomeFilters;
