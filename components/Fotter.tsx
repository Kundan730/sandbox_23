import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="bg-white text-black py-8 px-4 md:px-8"
      style={{
        backgroundImage: "url('/top-left-right.svg')",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              sandbox
            </Link>
          </div>
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/top-projects" className="hover:underline">
              top projects
            </Link>
            <Link href="/community" className="hover:underline">
              community
            </Link>
            <Link href="/advertisement" className="hover:underline">
              advertisement
            </Link>
          </nav>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            showcase your student projects, hackathon creations, or personal
            work on sandbox. share, get feedback, sell, and inspire—all in one
            place!
          </p>
        </div>
      </div>
    </footer>
  );
};
