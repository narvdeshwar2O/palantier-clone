import { gothamChaining } from "@/lib/data/gotham-chaining";
import Designed from "../aip/comp/Designed";
import GothamSolution from "./comp/GothamSolution";
import GothamQuote from "./comp/GothamQuote";
import HeroGotham from "./comp/HeroGotham";
import HeroSubheader from "./comp/HeroSubheader";
import AboutGotham from "./comp/AboutGotham.jsx";

function Gotham() {
  return (
    <>
      <HeroGotham />
      <HeroSubheader />
      <GothamSolution />
      <Designed data={gothamChaining} theme="dark" />
      <GothamQuote />
      <AboutGotham/>
    </>
  );
}

export default Gotham;