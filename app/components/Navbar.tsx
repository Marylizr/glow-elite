"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Coolsculpting", href: "#home" },
  { label: "Facial Treatments", href: "#facial" },
  { label: "Body Treatments", href: "#body" },
  { label: "Anti-Aging", href: "#antiaging" },
  { label: "Laser Hair Removal", href: "#laser" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 border-b border-[#eadfcf] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        {/* Logo */}
        <Link href="#home">
          <Image
            src="/logo/logo-01.png"
            alt="Glow Elite Aesthetic Clinic"
            width={80}
            height={64}
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden list-none gap-5 lg:flex xl:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[12px] tracking-wide text-[#a78155] transition-colors hover:text-[#563A2D]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          type="button"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul
          id="mobile-navigation"
          className="lg:hidden list-none px-4 sm:px-6 pb-4 flex flex-col gap-3 bg-white shadow-md"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-1 text-sm text-gray-600 hover:text-[#BF9255]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
