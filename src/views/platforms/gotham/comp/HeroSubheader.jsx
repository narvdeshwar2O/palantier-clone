import VideoContainer from "../../../../components/VideoContainer";

function HeroSubheader() {
  return (
    <div className="bg-[#1F2225] h-screen">
      <div className="text-white flex justify-between w-[98%] mx-auto text-2xl pt-10">
        <p>Software</p>
        <p>{"{Gotham}"}</p>
        <p> Get Started</p>
      </div>
      <div className="flex flex-col items-around justify-around text-white h-full">
        <p className="text-9xl text-center">
          Your software is the weapons system
        </p>
        <p className="text-center">
          Operating System for Global Decision-Making
        </p>
      </div>
      <VideoContainer videoPath={["https://videos.ctfassets.net/xrfr7uokpv1b/6a3SWJrFuBYdVcVbtbf1F9/54141348ba3e7ec29fb5f724f514c79b/Gotham-Full-Bleed-01.mp4"]} />
    </div>
  );
}

export default HeroSubheader;
