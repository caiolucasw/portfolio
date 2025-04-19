"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/utils/navbar-links";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {navbarLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
