import { V3 } from "@/assets/videos";
import VideoContainer from "@/components/VideoContainer";
import { sections } from "@/lib/data/aip-platfrom";
function HeroAip() {
  return (
    <div className="relative flex items-center">
      <VideoContainer videoPath={[V3]} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[98%] flex justify-between">
        {/* left */}
        <div className="text-white text-[200px]">AIP</div>
        {/* right */}
        <div className="space-y-3">
          {sections.map((item) => (
            <div className="border-l-2 border-white text-white px-2">
              <p>{item.title}</p>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroAip;
