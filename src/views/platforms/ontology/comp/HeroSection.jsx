import VideoContainer from "@/components/VideoContainer";
import TypewriterText from "./TypeWriter";

function HeroSection() {
  return (
    <div className="w-full flex flex-col">
      {/* Video Section: Using aspect-video or fixed height to prevent overlap */}
      <div className="relative flex justify-center items-center h-[50vh] md:h-[80vh] bg-black overflow-hidden">
        <VideoContainer
          videoPath={[
            "https://videos.ctfassets.net/xrfr7uokpv1b/3OdpFewxNsyosFoEgg0IFO/064ba03ffd3d6349f14c8abd7dc808c6/output_video.mp4",
          ]}
        />
        {/* Added a small shadow/gradient for text readability */}
        <p className="absolute z-10 text-white bottom-6 text-sm md:text-base font-medium tracking-wide animate-pulse">
          Swipe to explore
        </p>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-12 md:gap-24 py-12 md:py-20">
        
        {/* Section 1 */}
        <div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <TypewriterText
              text="Ontology System"
              // Adjusted text sizes: 4xl on mobile, 8xl on large screens
              className="text-4xl sm:text-6xl lg:text-8xl font-bold text-center md:text-left leading-tight"
              speed={40}
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <TypewriterText
              text="The Decision-Centric System for Enterprise Autonomy."
              className="text-lg sm:text-xl lg:text-2xl max-w-xl text-center md:text-left text-gray-800"
              speed={20}
            />
          </div>
        </div>

        <hr className="w-[90%] mx-auto border-gray-300" />

        {/* Section 2 */}
        <div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <TypewriterText
              text="The Core of the Enterprise Autonomy Stack"
              // Adjusted text sizes: 2xl on mobile, 5xl on large screens
              className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left leading-snug"
              speed={35}
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <TypewriterText
              text="Encode the data, logic, action, and security of the enterprise to automate decisions across operations."
              className="text-lg sm:text-xl lg:text-2xl max-w-xl text-center md:text-left text-gray-600"
              speed={18}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;