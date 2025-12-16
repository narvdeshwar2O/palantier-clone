import ActivateAISection from "./comp/ActivateAISection";
import HeroSection from "./comp/HeroSection";
import OntologyExplainPage from "./comp/OntologyExplainPage";
import OntologyStackSection from "./comp/OntologyStackSection";
import Footer from "@/layout/Footer"

function Ontology() {
  return (
    <div className="ontology-section">
      <HeroSection />
      <OntologyExplainPage />
      <OntologyStackSection />
      <ActivateAISection />
      <Footer />
    </div>
  );
}

export default Ontology;
