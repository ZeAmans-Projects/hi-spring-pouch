"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <Link href="/">
          <h1 className="cursor-pointer text-3xl font-black text-blue-700">
            Hi Spring
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <Link
              href="/"
              className="transition-all hover:text-blue-700 hover:font-semibold"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="transition-all hover:text-blue-700 hover:font-semibold"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/sustainability"
              className="transition-all hover:text-blue-700 hover:font-semibold"
            >
              Sustainability
            </Link>
          </li>

          <li>
            <Link
              href="/certifications"
              className="transition-all hover:text-blue-700 hover:font-semibold"
            >
              Certifications
            </Link>
          </li>

          <li>
            <Link
              href="/export"
              className="transition-all hover:text-blue-700 hover:font-semibold"
            >
              Export
            </Link>
          </li>

          <li>
            <Link
              href="/gallery"
              className="transition-all hover:text-blue-700 hover:font-semibold"
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="transition-all hover:text-blue-700 hover:font-semibold"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="transition-all hover:text-blue-700 hover:font-semibold"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <Button>Get a Quote</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="flex flex-col space-y-6 px-8 py-8 text-lg font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>

            <Link href="/sustainability" onClick={() => setMenuOpen(false)}>
              Sustainability
            </Link>

            <Link href="/certifications" onClick={() => setMenuOpen(false)}>
              Certifications
            </Link>

            <Link href="/export" onClick={() => setMenuOpen(false)}>
              Export
            </Link>

            <Link href="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>

            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <div className="pt-4">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                <Button>Get a Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}