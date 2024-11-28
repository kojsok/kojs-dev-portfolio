// src/app/posts/layout.tsx
import React from "react";
import Link from "next/link";
// import Navigation from "@/components/navigation";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center pt-8 bg-slate-950">
      {/* Навигационное меню */}
      {/* <Navigation /> */}
      <nav className="flex fixed z-20 flex-col justify-center px-12 py-6 max-w-full text-base font-medium tracking-tight leading-none whitespace-nowrap rounded-[13px] text-slate-300  max-md:px-5 bg-gradient-to-r from-[#04071D] via-[#04071D] to-[#0C0E23] border border-[rgba(105,113,162,0.16)] shadow-lg backdrop-blur-md transition-colors duration-300">
      <ul className="flex gap-8 items-center justify-center">
        <li className="group relative">
          <Link href="/" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            About
          </Link>
        </li>
        <li className="group relative">
          <Link href="/" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            Projects
          </Link>
        </li>
        <li className="group relative">
          <a href="/posts" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            Blog
          </a>
        </li>
        <li className="group relative">
          <Link href="/" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            Contact
          </Link>
        </li>
      </ul>
    </nav>

      {/* Контент страницы */}
      <main className="flex-grow">{children}</main>
    </div>
  );
}
