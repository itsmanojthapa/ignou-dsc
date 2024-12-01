"use client";

import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignedOut, SignedIn, SignOutButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ThemeToggle } from "../ThemeToogle/ThemeToogle";

function LeftSidebar() {
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className="custom-scrollbar  sticky left-0 top-0 flex h-screen flex-col justify-between  overflow-y-auto  bg-black p-2 pt-4 shadow-light-300 dark:shadow-none max-lg:w-[120px] max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-1 ">
        <div className="px-3 pb-10">
          <Link href="/">
            <Image
              src={"/assets/images/logo.png"}
              width={150}
              height={150}
              alt="IGNOU-DSC"
            />
          </Link>
        </div>

        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route ||
            (pathname.includes(link.route) && link.route.length > 1);

          const finalRoute =
            link.route === "/profile" && userId
              ? `/profile/${userId}`
              : link.route;

          if (link.route === "/profile" && !userId) return null;

          return (
            <Link
              key={link.label}
              href={finalRoute}
              className={`${
                isActive && "primary-gradient"
              } flex cursor-pointer gap-4 rounded-lg p-4 hover:bg-slate-800 ${
                link.color
              } `}>
              <link.imgURL
                // @ts-ignore
                width={18}
                height={18}
                color={link.color}
              />

              <p
                className={`text-light-900 ${
                  isActive ? "base-bold" : "base-medium"
                } text-sm max-lg:hidden`}>
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className="flex flex-col gap-3 pt-3">
          <Link href="/sign-in">
            <Button className="small-medium min-h-[41px]  w-full rounded-lg bg-dark-400 px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={24}
                height={24}
                className="invert-colors lg:hidden"
              />
              <span className="text-light-900 max-lg:hidden">Log In</span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 min-h-[41px]  w-full rounded-lg bg-dark-400 px-4 py-3 text-light-900 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sign up"
                width={24}
                height={24}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden max-lg:w-[120px]">Sign up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
      {/* <SignedIn>
        <SignOutButton>
          <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 text-light-900 shadow-none">
            <Image
              src="/assets/icons/arrow-left.svg"
              alt="arrowLeft"
              width={24}
              height={24}
            />
            <div className="max-lg:hidden max-lg:w-[120px]">Sign out</div>
          </Button>
        </SignOutButton>
      </SignedIn> */}
      <ThemeToggle />
    </section>
  );
}

export default LeftSidebar;
