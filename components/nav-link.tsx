"use client";

import useSpaceStore from "@/store/space-store";
import Link from "next/link";

interface NavLinkProps {
  label: string;
  href: string;
  onClick: () => void;
}

const NavLink = ({ label, href, onClick }: NavLinkProps) => {
  const { space } = useSpaceStore();
  return (
    <li
      className={`px-4 py-2 text-sm border-2 border-transparent ${
        space === "headspace"
          ? "hover:bg-(--omori-purple)"
          : "hover:bg-(--kel-orange)"
      } hover:border-(--omori-black) transition-colors duration-200`}
    >
      <Link href={href} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
