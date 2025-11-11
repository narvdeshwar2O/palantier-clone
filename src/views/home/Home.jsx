import React from "react";
import Carousel from "./components/Carousel";
import Navbar from "../../Layout/Navbar";
import Platform from "./components/Platform";
import PlatformInfo from "./components/PlatformInfo";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <PlatformInfo />
      <Platform />
    </>
  );
}

export default Home;
