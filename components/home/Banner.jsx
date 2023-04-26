import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className='min-h-screen  w-full bg-[url("/assets/banner.jpg")] bg-center bg-cover bg-no-repeat pt-[80px]  flex items-centera px-4'>
      <div className="h-full w-full absolute left-0 top-0 z-20 bg-[#0f172b]/70"></div>
      <div className="container relative z-30 flex items-center  gap-5 justify-between w-full">
        <div className="flex flex-col gap-2  max-w-[600px] ">
          <div className="text-6xl text-orange-500 font-semibold font-[Caveat]">
            Indulge in Our Delicious Cuisine
          </div>
          <div className="text-white text-sm font-semibold">
            Eat our restaurant, we cater to all tastes with a diverse range of
            delicious dishes made from top-quality ingredients. Our expert chefs
            craft special menus that will please even the most discerning
            foodies. Whether you are in the mood for a romantic dinner or a fun
            night out with friends, our stylish atmosphere and warm service will
            provide you with a truly memorable dining experience.
          </div>
          <Link
            href="#hamburger"
            className="  w-fit  bg-orange-500 text-white py-2 px-4 font-semibold hover:text-orange-500 hover:bg-white duration-300"
          >
            Show Menu
          </Link>
        </div>
        <div className="w-full  items-center justify-end hidden md:flex ">
          <div className="relative w-[300px] h-[300px] ">
            <Image fill src="/assets/hamb.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
