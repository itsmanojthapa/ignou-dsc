import type { Metadata } from "next";
/* eslint-disable */
import { Inter, Space_Grotesk } from "next/font/google";
/* eslint-enable */
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/prism.css";
import ThemeProvider from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotest = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: "IGNOU-DSC",
  description:
    "Welcome to the IGNOU Developer Student Club Social Media Community Q&A Platform! 🚀 Join our vibrant community of tech enthusiasts and aspiring developers at IGNOU. 🎓💻 Engage in insightful discussions, seek guidance on coursework, and collaborate on exciting projects. 🤝🌐 Whether you're a seasoned coder or just starting your programming journey, this is the place to share knowledge, ask questions, and connect with like-minded peers. Let's code, learn, and grow together!",
  icons: {
    icon: "/assets/images/logo.png",
  },
  applicationName: "Manoj Thapa",
  keywords: [
    "manoj thapa",
    "ignou",
    "ignou-dsc",
    "developer student club",
    "dsc",
    "community",
    "TechCommunity",
    "TechCommunity",
  ],
  themeColor: "linear-gradient(129deg, #2563eb 0%, #7c3aed 100%)",
  // openGraph: {
  //   type: "website",
  //   url: "https://ignou-dsc.vercel.app/",
  //   title: "IGNOU-DSC — Dev. Student Social Platform🚀🚀",
  //   description:
  //     "Welcome to the IGNOU Developer Student Club Social Media Community Q&A Platform! 🚀 Join our vibrant community of tech enthusiasts and aspiring developers at IGNOU. 🎓💻 Engage in insightful discussions, seek guidance on coursework, and collaborate on exciting projects. 🤝🌐 Whether you're a seasoned coder or just starting your programming journey, this is the place to share knowledge, ask questions, and connect with like-minded peers. Let's code, learn, and grow together!",
  //   images: "/public/assets/images/ignou-dsc.png",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.className} ${spaceGrotest.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
