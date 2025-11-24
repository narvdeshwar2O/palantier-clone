import { V3 } from "@/assets/videos";
import VideoContainer from "@/components/VideoContainer";
function Aip() {
  return (
    <>
      <div className="relative flex items-center">
        <VideoContainer videoPath={[V3]}/>
      </div>
    </>
  );
}

export default Aip;
