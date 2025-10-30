"use client";

import { navLinks } from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  // TODO: Finish mobile menu implementation
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-(--omori-white) border-b-3" : "bg-transparent"
        }`}
      >
        <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-row items-center gap-2">
            <div className="border-2 border-transparent hover:bg-(--omori-purple) hover:border-(--omori-black) transition-colors duration-200">
              <Image
                src="/mewo.webp"
                alt="Omori Mewo Logo"
                width={50}
                height={50}
              />
            </div>

            <span className="text-xl pixel-text">OMORI FAN SITE</span>
          </div>
          <nav>
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="px-4 py-2 text-sm border-2 border-transparent hover:bg-(--omori-purple) hover:border-(--omori-black) transition-colors duration-200"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                className="p-2 border-2 border-transparent hover:bg-(--omori-purple) hover:border-(--omori-black) transition-colors duration-200"
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden fixed top-22 left-0 right-0 bg-(--omori-white) z-30">
          <ul className="flex flex-col items-center gap-1 py-4">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="w-full text-center px-4 py-2 border-2 border-transparent hover:bg-(--omori-purple) hover:border-(--omori-black) transition-colors duration-200"
              >
                <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
