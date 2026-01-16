"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <Image src="/logo-v2.png" alt="TrueOcean Global" width={72} height={72} />
          <div>
            <div className="text-xl font-bold text-gray-900">TrueOcean</div>
            <div className="text-xs text-gray-600 tracking-wide">GLOBAL</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-10 text-gray-900">
          <Link href="/" className="hover:text-red-900 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-900 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-red-900 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-red-900 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
