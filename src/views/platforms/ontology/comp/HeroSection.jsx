import VideoContainer from "@/components/VideoContainer";
import TypewriterText from "./TypeWriter";

function HeroSection() {
  return (
    <>
      <div className="relative flex justify-center">
        <VideoContainer
          videoPath={[
            "https://videos.ctfassets.net/xrfr7uokpv1b/3OdpFewxNsyosFoEgg0IFO/064ba03ffd3d6349f14c8abd7dc808c6/output_video.mp4",
          ]}
        />

        <p className="absolute z-10 text-white bottom-10">Swipe to explore</p>
      </div>

      <div className="flex flex-col gap-5">
        {/* Section 1 */}
        <div className="p-10 flex justify-around items-center space-y-10 flex-col md:flex-row">
          <TypewriterText
            text="Ontology System"
            className="text-8xl text-center"
            speed={40}
          />

          <TypewriterText
            text="The Decision-Centric System for Enterprise Autonomy."
            className="text-2xl max-w-xl text-center md:text-left"
            speed={20}
          />
        </div>

        <hr className="w-[95%] mx-auto" />

        {/* Section 2 */}
        <div className="p-10 flex justify-around items-center space-y-10 flex-col md:flex-row">
          <TypewriterText
            text="The Core of the Enterprise Autonomy Stack"
            className="text-5xl max-w-2xl"
            speed={35}
          />

          <TypewriterText
            text="Encode the data, logic, action, and security of the enterprise to automate decisions across operations."
            className="text-2xl max-w-xl text-center md:text-left"
            speed={18}
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
