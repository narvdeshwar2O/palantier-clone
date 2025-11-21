import { ArrowBigDown, List, Search } from "lucide-react";
import VideoContainer from "../components/VideoContainer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { VIDEO_PATHS } from "../lib/data/video-path";

function Navbar({ onOpenDrawer }) {
  const navigate = useNavigate();
  return (
    <div className="relative flex items-center">
      <VideoContainer videoPath={VIDEO_PATHS} />
      <Nav onOpenDrawer={onOpenDrawer} />
      <h1 className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-white text-[clamp(20px,5vw,80px)] text-center font-Alliance2 font-AllianceNo1 w-full">
        AI-Powered Automation <br /> for Every Decision
      </h1>
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-center">
        Scroll to explore
        <br />
        <ArrowBigDown className="mx-auto mt-1" />
      </p>
      {/* for mobile view */}
      <div className="bottom-5 z-1000 flex justify-between fixed left-2 right-2 flex-row-reverse md:hidden">
        <Button size="sm" onClick={onOpenDrawer}>
          Get started
        </Button>

        <div className="flex">
          <Button size="icon">
            <Search strokeWidth={0.9} onClick={() => navigate("/search")} />
          </Button>
          <Button size="icon" onClick={() => navigate("/menu")}>
            <List strokeWidth={0.9} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
