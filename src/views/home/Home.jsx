import React, { useState } from "react";
import Carousel from "./components/Carousel";
import Navbar from "../../Layout/Navbar";
import PlatformInfo from "./components/PlatformInfo";
import TableAnimate from "./components/TabelAnimate";
import WhatWeDo from "./components/WhatWeDo";
import WhatOtheSay from "./components/WhatOtheSay";
import GetStarted from "../../components/GetStarted";

function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)}/>
      <Carousel />
      <PlatformInfo />
      <p className="bg-white p-5 font-300 text-3xl">Our products</p>
      <TableAnimate />
      <WhatWeDo />
      <WhatOtheSay />
      {isDrawerOpen && (
        <GetStarted onClose={() => setIsDrawerOpen(false)} />
      )}
    </>
  );
}

export default Home;
