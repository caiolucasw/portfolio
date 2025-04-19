"use client";
import React from "react";
import { navbarLinks } from "@/utils/navbar-links";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="flex justify-center mt-12 mb-7">
          <div>
            {" "}
            <Link href="/">
              <h1 className="text-2xl font-semibold italic text-white">
                CAIO<span className="text-accent">&nbsp;L.S</span>
              </h1>
            </Link>
          </div>
        </SheetTitle>
        <div className="flex flex-col justify-center items-center gap-8">
          {navbarLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
