import Banner from "@/components/home/Banner";
import MenuGrills from "@/components/home/MenuGrills";
import MenuHamburgers from "@/components/home/MenuHamburgers";
import MenuSalads from "@/components/home/MenuSalads";
import MenuSoups from "@/components/home/MenuSoups";
import React from "react";

const index = () => {
  return (
    <div className="scroll-smooth">
      <Banner />
      <MenuHamburgers />
      <MenuSoups />
      <MenuGrills />
      <MenuSalads />
    </div>
  );
};

export default index;
