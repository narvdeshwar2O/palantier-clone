import React from "react";
import Carousel from "./components/Carousel";
import Navbar from "../../Layout/Navbar";
import Platform from "./components/Platform";
import PlatformInfo from "./components/PlatformInfo";
import TableAnimate from "./components/TabelAnimate";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <PlatformInfo />
      <TableAnimate />
      <Platform />
    </>
  );
}

export default Home;
