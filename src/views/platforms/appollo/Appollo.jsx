import GetStarted from "../ontology/comp/GetStarted";
import DevOpsStrategy from "./comp/Devstrat";
import EnvironmentsCarousel from "./comp/EnviromentalCarousel";
import { FeatureOverview } from "./comp/FeatureOverview";
import HeroSection from "./comp/HeroSection";
import ExploreSolutions from "./comp/Solutions";
import Footer from "@/layout/Footer";

function Appollo() {
  return (
    <div className="appollo-section">
      <HeroSection />
      <FeatureOverview />
      <DevOpsStrategy />
      <ExploreSolutions />
      <EnvironmentsCarousel />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Appollo;
