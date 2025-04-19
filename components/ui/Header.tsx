import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "../client/ui/Navbar";
import MobileNavbar from "../client/ui/MobileNavbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 ">
        <Link href="/">
          <h1 className="text-4xl font-semibold italic">
            CAIO <span className="text-accent">L.S</span>
          </h1>
        </Link>

        <div className="hidden xl:flex">
          <Navbar />
        </div>

        {/* Mobile Nav */}

        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
