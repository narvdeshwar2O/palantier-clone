import { useState } from "react";
import HeroAip from "./comp/HeroAip";
import HeroSubheader from "./comp/HeroSubheader";
import GetStarted from "../../../components/GetStarted";
import Explore from "./comp/Explore";
import Designed from "./comp/Designed";

function Aip() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <HeroAip />
      <HeroSubheader onOpen={() => setIsDrawerOpen(true)} />
      {isDrawerOpen && <GetStarted onClose={() => setIsDrawerOpen(false)} />}
      <Explore />
      <Designed/>
    </>
  );
}

export default Aip;
