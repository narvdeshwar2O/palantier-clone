import { useState } from "react";
import HeroAip from "./comp/HeroAip";
import HeroSubheader from "./comp/HeroSubheader";
import GetStarted from "../../../components/GetStarted";
import Beyound from "./comp/Beyound";

function Aip() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <HeroAip />
      <HeroSubheader onOpen={() => setIsDrawerOpen(true)} />
      {isDrawerOpen && <GetStarted onClose={() => setIsDrawerOpen(false)} />}
      <Beyound />
    </>
  );
}

export default Aip;
