import VideoContainer from "@/components/VideoContainer";

function HeroGotham() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <VideoContainer
        videoPath={[
          "https://videos.ctfassets.net/xrfr7uokpv1b/W2oAJrtiujYtoTJWkgyS3/362140aaea3ca716ade045de6e3bc32e/Gotham-Hero.mp4",
        ]}
      />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="text-white font-100 text-[60px] sm:text-[120px] md:text-[180px] lg:text-[260px] xl:text-[340px] 2xl:text-[400px] w-full leading-none">
          Gotham
        </div>
      </div>
    </div>
  );
}

export default HeroGotham;
