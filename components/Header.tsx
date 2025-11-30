"use client";

import Link from "next/link";
import { LogoWithText } from "@/components/LogoWithText";

export default function Header() {
  return (
    <>
      <header className="w-full sticky top-0 z-50 pt-[env(safe-area-inset-top)]">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 lg:py-6">
          <div className="mx-auto max-w-4xl rounded-[24px] p-3 liquid-glass flex items-center justify-between gap-2">
            <Link
              href="/"
              aria-label="degaus home"
              className="flex items-center gap-1.5 sm:gap-2"
            >
              <LogoWithText className="h-8" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <HeaderItem href="/#use-cases">Use Cases</HeaderItem>
              <HeaderItem href="/#features">Features</HeaderItem>
              <HeaderItem href="/#pricing">Pricing</HeaderItem>
              <HeaderItem href="/blog">Blog</HeaderItem>
            </nav>

            {/* Action Buttons - Visible on all screen sizes */}
            <div className="flex items-center gap-2.5">
              <button
                aria-label="Login"
                className="flex items-center justify-center w-[71px] h-[35px] rounded-[10px] bg-[#E0E0E0] px-3 sm:px-4 py-1 sm:py-1.5 pb-[6px] sm:pb-[10px] text-base lg:text-xl font-bold text-black shadow-[inset_0px_-4px_4px_0px_rgba(0,0,0,0.05),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] hover:bg-gray-300 transition cursor-pointer tracking-[-0.4px]"
              >
                Login
              </button>

              <button
                aria-label="Try for free"
                className="relative flex items-center justify-center w-[112px] h-[35px] rounded-[10px] px-3 sm:px-4 py-1 sm:py-1.5 pb-[6px] sm:pb-[10px] text-base lg:text-xl font-bold text-[#EEE] bg-linear-to-r from-[#152cd3] to-[#b308a7] shadow-[0px_4px_15px_0px_rgba(46,71,249,0.25),inset_0px_-4px_4px_0px_rgba(0,0,0,0.3),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 whitespace-nowrap tracking-[-0.4px] overflow-hidden group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0px 8px 30px 0px rgba(46,71,249,0.45), inset 0px -4px 4px 0px rgba(0,0,0,0.3), inset 0px 4px 4px 0px rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0px 4px 15px 0px rgba(46,71,249,0.25), inset 0px -4px 4px 0px rgba(0,0,0,0.3), inset 0px 4px 4px 0px rgba(255,255,255,0.3)";
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s linear infinite",
                  }}
                />
                <span className="relative z-10">Try for free</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

type HeaderItemProps = {
  href: string;
  children: React.ReactNode;
};

function HeaderItem({ href, children }: HeaderItemProps) {
  return (
    <Link
      href={href}
      className="text-lg lg:text-xl font-semibold hover:text-[#b308a7] transition-colors"
    >
      {children}
    </Link>
  );
}
