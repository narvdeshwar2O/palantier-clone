import { V3 } from "@/assets/videos";
import VideoContainer from "@/components/VideoContainer";
import { sections } from "@/lib/data/aip-platfrom";

function HeroAip() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Video */}
      <VideoContainer videoPath={[V3]} />

      {/* Content Overlay */}
      <div
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%]
          flex flex-col sm:flex-row justify-between items-center gap-6
          pb-4
        "
      >
        {/* Left Text */}
        <div
          className="
            text-white font-bold
            text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px]
            leading-none
          "
        >
          AIP
        </div>

        {/* Right Section */}
        <div
          className="
            space-y-3 w-full sm:w-auto text-center sm:text-left
          "
        >
          {sections.map((item) => (
            <div
              key={item.id}
              className="
                border-l-2 border-white text-white px-3 py-1
                hover:text-gray-300 transition
                text-sm sm:text-base md:text-lg lg:text-xl
              "
            >
              <p className="font-semibold">{item.title}</p>
              <p className="opacity-80">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroAip;
