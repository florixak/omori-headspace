"use client";

import { navLinks, socials } from "@/constants";
import useSpaceStore from "@/store/space-store";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { space } = useSpaceStore();
  const isHeadspace = space === "headspace";
  return (
    <footer className="flex flex-col w-full border-t-4 border-(--omori-black) px-10 py-12 gap-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between space-y-8">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/mewo.webp"
              alt="Omori Mewo Logo"
              width={50}
              height={50}
            />

            <span className="text-xl pixel-text">OMORI HEADSPACE</span>
          </div>
          <p className="text-sm max-w-sm">
            A fan-made tribute to OMORI. Everything is going to be okay.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="text-sm uppercase tracking-wide font-mono">EXPLORE</h4>
          <ul className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm hover:underline transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="text-sm uppercase tracking-wide font-mono">CONNECT</h4>
          <div className="flex flex-row flex-wrap gap-2">
            {socials.map((social) => (
              <Link key={social.label} href={social.href}>
                <div
                  aria-label={social.label}
                  className={`rpg-border p-2 ${
                    space === "headspace"
                      ? "hover:bg-(--omori-purple)"
                      : "hover:bg-(--kel-orange)"
                  } hover:text-(--omori-white) hover:border-(--omori-black) transition-colors duration-200`}
                >
                  <social.icon />
                </div>
              </Link>
            ))}
          </div>
          <p className="text-sm max-w-sm">
            Join the community and share your love for OMORI
          </p>
        </div>
      </div>
      <hr className="h-1 bg-(--omori-black)" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2">
          <p className="text-sm text-center md:text-left text-wrap">
            © 2025 OMORI Headspace Made With 💜 By{" "}
            <a
              href="https://www.github.com/florixak"
              target="_blank"
              className={
                isHeadspace
                  ? "text-(--omori-purple) hover:underline"
                  : "text-(--kel-orange) hover:underline"
              }
            >
              Ondřej Pták
            </a>
          </p>
          <div className="flex items-center gap-2 px-4 py-2 bg-(--omori-black) text-(--omori-white) text-sm">
            <span>NOT OFFICIAL</span>
            <span className="opacity-50">|</span>
            <span>FAN CREATION</span>
          </div>
        </div>
        <div className="battle-box text-center p-6">
          <p className="text-sm max-w-3xl mx-auto">
            This is a fan-made website. OMORI and all related characters are
            property of OMOCAT LLC. <br /> All the content is owned by OMOCAT
            LLC and it is used for non-commercial fan purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
