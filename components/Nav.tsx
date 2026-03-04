"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/focus-areas", label: "Focus Areas" },
  { href: "/global-outreach", label: "Global Outreach" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-brown-dark font-[family-name:var(--font-playfair)]"
        >
          JJ Family Foundation
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors font-[family-name:var(--font-lato)] ${
                  isActive
                    ? "text-terracotta border-b-2 border-terracotta pb-1"
                    : "text-text-dark hover:text-brown-mid"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-terracotta text-white rounded-lg px-6 py-2 text-sm font-semibold transition-colors hover:bg-[#B07D55] font-[family-name:var(--font-lato)]"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-brown-dark"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-cream-light flex flex-col">
          <div className="flex items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-xl font-bold text-brown-dark font-[family-name:var(--font-playfair)]"
            >
              JJ Family Foundation
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-brown-dark"
            >
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-medium min-h-[48px] flex items-center font-[family-name:var(--font-lato)] ${
                    isActive ? "text-terracotta" : "text-text-dark"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-terracotta text-white rounded-lg px-8 py-3 text-lg font-semibold transition-colors hover:bg-[#B07D55] font-[family-name:var(--font-lato)]"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
