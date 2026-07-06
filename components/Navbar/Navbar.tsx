"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-blue-100 shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20 lg:h-24">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-2 sm:gap-3 lg:gap-4">

  <Image
    src="/logos/logo.PNG"
    alt="Hi Spring Logo"
    width={200}
    height={80}
    priority
    className="h-12 sm:h-12 lg:h-14 w-auto object-contain shrink-0"
  />

  <div>
    <h1 className="text-lg sm:text-2xl lg:text-3xl font-black text-blue-700 leading-none">
      Hi Spring
    </h1>

    <p className="hidden sm:block text-[10px] lg:text-xs tracking-[0.2em] uppercase text-gray-500 mt-1">
      MGF Industries PLC
    </p>
  </div>

</Link>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8 font-semibold text-gray-700">

          {[
            ["Home", "/"],
            ["Products", "/products"],
            ["Manufacturing", "/manufacturing"],
            ["Sustainability", "/sustainability"],
            ["Gallery", "/gallery"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([title, href]) => (

            <li key={title}>

              <Link
                href={href}
                className="transition duration-300 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 pb-1"
              >
                {title}
              </Link>

            </li>

          ))}

        </ul>

        {/* Desktop Button */}

        <div className="hidden lg:block">

          <Link href="/contact">

            <Button>
              Get a Quote
            </Button>

          </Link>

        </div>

        {/* Mobile Menu Button */}

<button
  type="button"
  className="lg:hidden p-2 relative z-[100]"
  onClick={() => {
    console.log("Menu clicked");
    setMenuOpen(!menuOpen);
  }}
  aria-label="Toggle Menu"
>
  {menuOpen ? (
    <X className="text-blue-700" size={32} />
  ) : (
    <Menu className="text-blue-700" size={32} />
  )}
</button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t border-blue-100 shadow-lg relative z-[90]">

          <div className="flex flex-col px-6 py-6 space-y-5 font-semibold">

            {[
              ["Home", "/"],
              ["Products", "/products"],
              ["Manufacturing", "/manufacturing"],
              ["Sustainability", "/sustainability"],
              ["Gallery", "/gallery"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([title, href]) => (

              <Link
                key={title}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                {title}
              </Link>

            ))}

            <div className="pt-2">

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
              >
                <Button>
                  Get a Quote
                </Button>

              </Link>

            </div>

          </div>

        </div>

      )}

    </nav>
  );
}