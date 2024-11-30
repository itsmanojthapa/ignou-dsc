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

          if (link.route === "/profile") {
            if (userId) {
              link.route = `/profile/${userId}`;
            } else {
              return null;
            }
          }

          return (
            <Link
              key={link.label}
              href={link.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-light-900"
              } flex-start cursor-pointer gap-4 rounded-lg bg-transparent p-4 text-sm hover:bg-slate-800`}>
              {typeof link.imgURL === "string" ? (
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={18}
                  height={18}
                  className={`${link.color}`}
                />
              ) : (
                <link.imgURL size={18} className={`${link.color}`} />
              )}
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } text-sm  max-lg:hidden`}>
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <ThemeToggle />
      <SignedOut>
        <div className="flex flex-col gap-3 pt-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={24}
                height={24}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
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
      <SignedIn>
        <SignOutButton>
          <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image
              src="/assets/icons/arrow-left.svg"
              alt="arrowLeft"
              width={24}
              height={24}
            />
            <div className="max-lg:hidden max-lg:w-[120px]">Sign out</div>
          </Button>
        </SignOutButton>
      </SignedIn>
    </section>
  );
}

export default LeftSidebar;
