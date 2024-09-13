import type { Metadata } from "next";
import "./globals.css";
import { newAgeFont } from "@/lib/fonts/font";
export const metadata: Metadata = {
  title: "sanbox 23",
  description: "One platform for all your projects",
};

// components
import { HeaderComponent } from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${newAgeFont.className} bg-white overflow-x-hidden   h-full text-black  flex flex-col w-screen px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 xl:pl-12 `}
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <body className="bg-white">
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
