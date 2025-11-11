import { useCallback, useState } from "react";
import { VIDEO_PATHS } from "../lib/data/video-path";

function VideoContainer({ style }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleVideoEnd = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % VIDEO_PATHS.length);
  }, []);

  const videoSrc = VIDEO_PATHS[activeIndex];

  return (
    <video
      key={activeIndex}
      src={videoSrc}
      autoPlay
      muted
      loop={false}
      playsInline
      onEnded={handleVideoEnd}
      className="h-screen w-screen object-cover"
      style={style}
    />
  );
}

export default VideoContainer;
