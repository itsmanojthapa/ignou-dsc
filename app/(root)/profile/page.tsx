"use client";

import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userId) {
      router.push(`/profile/${userId}`);
    } else {
      router.push("/sign-in");
    }
  }, [userId, router]);

  return <div>Redirecting...</div>;
};

export default Page;
