import Banner from "@/components/home/Banner";
import MenuGrills from "@/components/home/MenuGrills";
import MenuHamburgers from "@/components/home/MenuHamburgers";
import MenuSalads from "@/components/home/MenuSalads";
import MenuSoups from "@/components/home/MenuSoups";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Ofenos</title>
      </Head>
      <Banner />
      <MenuHamburgers />
      <MenuSoups />
      <MenuGrills />
      <MenuSalads />
    </div>
  );
};

export default index;
