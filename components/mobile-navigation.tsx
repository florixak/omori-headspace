"use client";

import { navLinks } from "@/constants";
import NavLink from "./nav-link";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface MobileNavigationProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNavigation = ({ isOpen, toggleMenu }: MobileNavigationProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [shouldRender, setShouldRender] = useState(isOpen);

  const effectFn = useEffectEvent(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  });

  useEffect(() => {
    effectFn();
  }, [isOpen]);

  useGSAP(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: -50, opacity: 0, pointerEvents: "none" },
        {
          y: 0,
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.3,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: -50,
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setShouldRender(false),
      });
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <nav
      ref={menuRef}
      aria-label="Mobile Navigation"
      className="md:hidden fixed top-22 left-0 right-0 w-full bg-(--omori-white) z-49"
    >
      <ul className="flex flex-col items-center gap-1 py-4">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            label={link.label}
            href={link.href}
            onClick={toggleMenu}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
