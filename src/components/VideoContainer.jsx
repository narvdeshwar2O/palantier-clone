import { useCallback, useState } from "react";

function VideoContainer({ videoPath }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleVideoEnd = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % videoPath.length);
  }, []);

  const videoSrc = videoPath[activeIndex];
  return (
    <>
      <video
        key={activeIndex}
        src={videoSrc}
        autoPlay
        muted
        loop={false}
        playsInline
        onEnded={handleVideoEnd}
        className="h-screen w-screen object-cover"
      />
      <span className="h-screen bg-black/20 absolute inset-0 z-1"></span>
    </>
  );
}

export default VideoContainer;
