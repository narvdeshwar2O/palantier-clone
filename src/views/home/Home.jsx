import { useState } from "react";
import Carousel from "./components/Carousel";
import Navbar from "../../Layout/Navbar";
import PlatformInfo from "./components/PlatformInfo";
import TableAnimate from "./components/TabelAnimate";
import WhatWeDo from "./components/WhatWeDo";
import WhatOtheSay from "./components/WhatOtheSay";
import GetStarted from "../../components/GetStarted";

function Home() {
  return (
    <>
      <Navbar/>
      <Carousel />
      <PlatformInfo />
      <p className="bg-white p-6 font-300 text-3xl">Our products</p>
      <TableAnimate />
      <WhatWeDo />
      <WhatOtheSay />
      
    </>
  );
}

export default Home;
