import React from "react";
import LeftSidebar from "../../components/shared/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/shared/RightSidebar/RightSidebar";
import { Toaster } from "@/components/ui/toaster";
import { CommandCard } from "@/components/shared/Command/Command";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-black">
      <div className="flex">
        <LeftSidebar />
        <section
          style={{
            height: "calc(100vh - 50px)",
            width: "calc(100vw - 40px)",
            scrollbarWidth: "none",
          }}
          className="mx-[20px] my-[25px] flex w-full overflow-hidden rounded-3xl bg-white dark:bg-slate-950">
          <div className="custom-scrollbar w-full flex-1 overflow-y-scroll p-6 sm:p-10 lg:p-20">
            {children}
          </div>
          <RightSidebar />
        </section>
      </div>
      <Toaster />
      <CommandCard />
    </main>
  );
};

export default Layout;
