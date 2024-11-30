import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import LeftSidebar from "../../components/shared/LeftSidebar/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar/RightSidebar";
import { Toaster } from "@/components/ui/toaster";
import { CommandCard } from "@/components/shared/Command/Command";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-black">
      {/* <Navbar /> */}
      <div className="flex">
        <LeftSidebar />

        <section
          style={{
            height: "calc(100vh - 50px)",
            width: "calc(100vw - 40px)",
            scrollbarWidth: "none",
          }}
          className="m-[20px] flex w-full overflow-auto  rounded-3xl bg-white ">
          <div
            className="mx-auto w-full max-w-5xl overflow-y-scroll p-10"
            style={{
              scrollbarWidth: "none",
            }}>
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
