"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Women", href: "/services/women" },
      { label: "Men", href: "/services/men" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="QBS Salon" width={120} height={38} className="h-9 w-auto" priority />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <button className="text-sm font-medium text-gray-700 hover:text-[#8B5CF6] transition-colors">
                    {link.label}
                  </button>
                  {dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-[#8B5CF6] hover:bg-gray-50"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#8B5CF6] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <a
            href="tel:+919848609996"
            className="hidden lg:flex items-center gap-2 bg-[#652D91] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#50287A] transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 98486 09996
          </a>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="space-y-2">
                  <span className="block text-sm font-medium text-gray-700">
                    {link.label}
                  </span>
                  <div className="pl-4 space-y-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block text-sm text-gray-500 hover:text-[#8B5CF6]"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-medium text-gray-700 hover:text-[#8B5CF6]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="tel:+919848609996"
              className="flex items-center justify-center gap-2 bg-[#652D91] text-white px-5 py-2.5 rounded-full text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              +91 98486 09996
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
