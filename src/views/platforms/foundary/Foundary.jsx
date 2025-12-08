import GlobalImpact from "./comp/GlobalImpact";
import PalantirFoundry from "./comp/HeroSection";
import Ontalogy from "./comp/Ontalogy";
import OntologyOperations from "./comp/OntologyOperation";
import OntologySection from "./comp/RealTimeColl";

function Foundary() {
  return (
    <>
      <PalantirFoundry />
      <Ontalogy />
      <OntologySection />
      <OntologyOperations />
      <GlobalImpact/>
    </>
  );
}

export default Foundary;
