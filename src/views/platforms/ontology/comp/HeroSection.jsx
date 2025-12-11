import VideoContainer from "../../../../components/VideoContainer";

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
        <div className="p-10 flex justify-around items-center space-y-10">
          <p className="text-8xl">Ontology System</p>
          <p className="text-2xl">The Decision-Centric System for Enterprise Autonomy.</p>
        </div>
         <hr className="w-[95%] mx-auto" />
        <div className="p-10 flex justify-around items-center space-y-10">
          <p className="text-5xl">The Core of the Enterprise Autonomy Stack</p>
          <p className="text-2xl">
            Encode the data, logic, action, and security of the enterprise to
            automate decisions across operations.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
