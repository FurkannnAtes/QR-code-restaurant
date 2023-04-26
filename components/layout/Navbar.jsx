import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="fixed backdrop-blur-md left-0 top-0 bg-[#0f172b] z-40 w-full">
      <div className=" container h-[80px]  flex items-center justify-between px-4 w-full z-40">
        <div className="font-[Caveat] font-extrabold text-4xl text-orange-500">
          Ofenos
        </div>
        <div
          className={`${
            showNav ? "h-[240px] py-5" : "h-0"
          } duration-300 absolute flex flex-col  top-[80px]  left-0 bg-[#0f172b] w-full md:flex-row items-center gap-5 md:h-fit overflow-y-hidden md:relative md:w-fit md:top-auto md:left-auto `}
        >
          <Link
            className="hover:text-orange-500 duration-300 font-semibold  text-white"
            href="/"
            onClick={() => setShowNav(false)}
          >
            Home
          </Link>
          <Link
            className="hover:text-orange-500 duration-300 font-semibold  text-white"
            href="#hamburger"
            onClick={() => setShowNav(false)}
          >
            Hamburgers
          </Link>
          <Link
            className="hover:text-orange-500 duration-300 font-semibold  text-white"
            href="#soups"
            onClick={() => setShowNav(false)}
          >
            Soups
          </Link>
          <Link
            className="hover:text-orange-500 duration-300 font-semibold  text-white"
            href="#grills"
            onClick={() => setShowNav(false)}
          >
            Grills
          </Link>
          <Link
            className="hover:text-orange-500 duration-300 font-semibold  text-white"
            href="#salads"
            onClick={() => setShowNav(false)}
          >
            Salads
          </Link>
        </div>
        <buttona
          onClick={() => setShowNav(showNav ? false : true)}
          className="cursor-pointer md:hidden hover:text-orange-500 text-white duration-300  text-xl"
        >
          <GiHamburgerMenu />
        </buttona>
      </div>
    </div>
  );
};

export default Navbar;
