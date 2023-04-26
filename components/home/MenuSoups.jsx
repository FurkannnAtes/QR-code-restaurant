import Image from "next/image";
import React from "react";

const MenuHamburgers = () => {
  return (
    <div
      className="flex justify-between items-center font-[Caveat] bg-[#0f172b]"
      id="soups"
    >
      <div className="container flex justify-around items-center gap-s py-10  ">
        <div className="  items-center justify-center hidden md:flex">
          <div className="relative w-[400px] h-[400px] ">
            <Image fill src="/assets/soup2.png" alt="" />
          </div>
        </div>
        <div className="bg-[url('/assets/menu-bg.jpg')] bg-cover bg-center w-[350px] h-[500px] rounded-xl flex flex-col gap-5 relative overflow-hidden py-5">
          <div className="absolute left-0 top-0 w-full h-full bg-black/80 z-20"></div>
          <div className="text-5xl text-white font-semibold  relative z-30 text-center">
            Soups
          </div>
          <div className=" relative z-30 flex flex-col gap-5 text-white px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-white border border-orange-500 p-2 rounded-full">
                  <div className="relative  w-14 h-14 rounded-full overflow-hidden  ">
                    <Image fill src="/assets/soup1.png" alt="" />
                  </div>
                </div>
                <div className="text-white font-extrabold text-xl">
                  Chicken soup
                </div>
              </div>
              <div className="text-xl font-semibold">16$</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-white border border-orange-500 p-2 rounded-full">
                  <div className="relative  w-14 h-14 rounded-full overflow-hidden  ">
                    <Image fill src="/assets/soup2.png" alt="" />
                  </div>
                </div>
                <div className="text-white font-extrabold text-xl">
                  Lenit soup
                </div>
              </div>
              <div className="text-xl font-semibold ">26$</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-white border border-orange-500 p-2 rounded-full">
                  <div className="relative  w-14 h-14 rounded-full overflow-hidden  ">
                    <Image fill src="/assets/soup3.png" alt="" />
                  </div>
                </div>
                <div className="text-white font-extrabold text-xl">
                  Rice soup
                </div>
              </div>
              <div className="text-xl font-semibold">36$</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-white border border-orange-500 p-2 rounded-full">
                  <div className="relative  w-14 h-14 rounded-full overflow-hidden  ">
                    <Image fill src="/assets/soup4.png" alt="" />
                  </div>
                </div>
                <div className="text-white font-extrabold text-xl">
                  Vegetable soup
                </div>
              </div>
              <div className="text-xl font-semibold">46$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHamburgers;
