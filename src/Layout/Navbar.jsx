import { ArrowBigDown, List, Search } from "lucide-react";
import VideoContainer from "../components/VideoContainer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { VIDEO_PATHS } from "../lib/data/video-path";
import { useState } from "react";
import GetStarted from "../components/GetStarted";
import { AnimatePresence } from "framer-motion";

function Navbar() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      <VideoContainer videoPath={VIDEO_PATHS} />

      <Nav onOpenDrawer={() => setIsDrawerOpen(true)} />

      {/* HERO TEXT */}
      <h1 className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-white text-[clamp(20px,5vw,80px)] text-center w-full">
        AI-Powered Automation <br /> for Every Decision
      </h1>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-center">
        Scroll to explore
        <ArrowBigDown className="mx-auto mt-1" />
      </p>

      {/* MOBILE ACTION BAR */}
      <div className="fixed bottom-5 left-2 right-2 z-50 flex justify-between md:hidden">
        <Button size="sm" onClick={() => setIsDrawerOpen(true)}>
          Get started
        </Button>

        <div className="flex">
          <Button size="icon" onClick={() => navigate("/search")}>
            <Search strokeWidth={0.9} />
          </Button>
          <Button size="icon" onClick={() => navigate("/menu")}>
            <List strokeWidth={0.9} />
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isDrawerOpen && <GetStarted onClose={() => setIsDrawerOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
