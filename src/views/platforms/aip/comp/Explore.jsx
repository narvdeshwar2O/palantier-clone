import { useRef, useState, useEffect } from "react";
import { V4 } from "../../../../assets/videos";

function CardDesign({ title, count }) {
  return (
    <div className="border p-2 rounded-md border-white w-42 h-fit">
      <p className="text-white">{title}</p>
      <p className="text-white/50">{count}</p>
    </div>
  );
}

const positions = [
  {
    A: { divPos: "w-[620px] top-26 right-0 h-64", spanPos: "top-46 left-1/2" },
  },
  {
    B: {
      divPos: "w-[620px] top-[362px] right-0 h-[360px]",
      spanPos: "top-1/2 left-1/2",
    },
  },
  {
    C: {
      divPos: "w-[140px] top-[362px] right-0 h-14",
      spanPos: "top-[55%] right-28",
    },
  },
];

function Explore() {
  const wrapperRef = useRef(null);
  const [activePosition, setActivePosition] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const wrapperTop = rect.top;
      const wrapperHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (wrapperTop > windowHeight) {
        setActivePosition(null);
        return;
      }

      if (wrapperTop + wrapperHeight < 0) {
        setActivePosition(2);
        return;
      }

      const scrollProgress = Math.max(
        0,
        Math.min(1, -wrapperTop / (wrapperHeight - windowHeight))
      );

      if (scrollProgress < 0.25) {
        setActivePosition(null);
      } else if (scrollProgress < 0.55) {
        setActivePosition(0); // Position A
      } else if (scrollProgress < 0.85) {
        setActivePosition(1); // Position B
      } else {
        setActivePosition(2); // Position C
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#1D1F2B] pb-10">
      <div className="flex justify-between w-[95%] mx-auto">
        <div className="mt-28">
          <p className="text-5xl text-white">Beyond Chat</p>
          <p className="text-[#424662] text-3xl">Explore AIP</p>
        </div>

        <div className="mt-28 flex gap-2">
          <CardDesign title="AI App" count={1} />
          <CardDesign title="Action-Driven Logic" count={2} />
          <CardDesign title="Automation" count={3} />
        </div>
      </div>

      <div
        ref={wrapperRef}
        className="relative mt-10"
        style={{ height: "300vh" }}
      >
        <div className="sticky top-0 border-[0.5px] border-white/20 w-[90%] mx-auto rounded-md h-screen flex z-10">
          <div className="w-12 h-full border-r border-white/20"></div>

          <div className="w-full flex flex-col">
            <div className="h-12 border-b border-white/20"></div>

            <div className="flex-1 relative overflow-hidden">
              <video
                src={V4}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              />

              {positions.map((point, i) => {
                const key = Object.keys(point)[0];
                const { divPos, spanPos } = point[key];
                const isActive = activePosition === i;

                return (
                  <div key={key}>
                    <div
                      className={`absolute z-20 bg-white/10 transition-all duration-700 ${divPos}`}
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scale(1)" : "scale(0.95)",
                      }}
                    />
                    <span
                      className={`absolute size-8 bg-white/50 text-black ${spanPos} -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-bold transition-all duration-700`}
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? "translate(-50%, -50%) scale(1)"
                          : "translate(-50%, -50%) scale(0.5)",
                      }}
                    >
                      {key}
                    </span>
                  </div>
                );
              })}

              {/* Scroll indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm bg-black/30 px-4 py-2 rounded-full">
                Scroll to explore • Position:{" "}
                {activePosition === null
                  ? "None"
                  : String.fromCharCode(65 + activePosition)}
              </div>
            </div>
          </div>

          <div className="w-12 h-full border-l border-white/20"></div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
