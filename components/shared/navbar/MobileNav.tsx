"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;
        return (
          <SheetClose asChild key={link.label}>
            <Link
              href={link.route}
              className={` ${
                isActive
                  ? "primary-gradient rounded-lg text-light-900 "
                  : "text-dark300_light900"
              }  flex items-center justify-start gap-4 bg-transparent p-4`}>
              <Image
                src={link.imgURL as string}
                alt={link.label}
                height={20}
                width={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {link.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

function MobileNav() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/icons/hamburger.svg"
            alt="Humburger menu"
            width={33}
            height={33}
            className="invert-colors cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="background-light900_dark200 border-none">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src={"/assets/images/logo.png"}
                  width={170}
                  height={170}
                  alt="IGNOU-DSC"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div>
            <SheetClose asChild>
              <NavContent />
            </SheetClose>
            <SheetFooter>
              <div>
                <SignedOut>
                  <div className="flex flex-col gap-3">
                    <SheetClose asChild>
                      <Link href="/sign-in">
                        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                          <span className="primary-text-gradient ">Log In</span>
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/sign-up">
                        <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                          Sign Up
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </SignedOut>
              </div>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
