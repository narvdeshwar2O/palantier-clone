import { useState, useRef, useEffect } from "react";
import { designedFix } from "../../../../lib/data/designed-data";
import { IndexCluster } from "./Index";

function Switcher({ video, details }) {
  const [isVideo, setVideo] = useState(true);
  return (
    <>
      <div className="border rounded-full w-fit p-px space-x-1">
        <button
          onClick={() => setVideo(true)}
          className={`rounded-full px-3 py-1 cursor-pointer transition-all duration-500 ${
            isVideo ? "bg-black text-white" : "text-black"
          }`}
        >
          Video
        </button>
        <button
          onClick={() => setVideo(false)}
          className={`rounded-full px-3 py-1 cursor-pointer transition-all duration-500 ${
            !isVideo ? "bg-black text-white" : "text-black"
          }`}
        >
          Details
        </button>
      </div>

      {isVideo ? (
        <div className="mt-4 border rounded-xl p-1 shadow-md">
          <video src={video} autoPlay loop muted className="rounded-xl" />
        </div>
      ) : (
        <div className="mt-4 border rounded-xl p-6 shadow-md space-y-4">
          {details.map((d, i) => (
            <div key={i}>
              <p className="text-2xl font-semibold">{d.title}</p>
              <p className="text-lg text-gray-700">{d.desc}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function Designed() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number(e.target.dataset.index));
          }
        });
      },
      { threshold: 0.55 }
    );

    sectionRefs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="w-[90%] mx-auto space-y-20 py-20">
      {/* REAL MOVING INDEX EFFECT */}
    

      {designedFix.map((item, i) => (
        <section
          key={i}
          data-index={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="grid grid-cols-[0.6fr_1fr] gap-14 min-h-screen items-center"
        >
          <div>
            <p className="text-6xl font-bold leading-tight text-black">
              {item.title}
            </p>
          </div>

          <div>
            <p className="text-xl text-gray-700 mb-5">{item.subtitle}</p>
            <Switcher video={item.videoSrc} details={item.details} />
          </div>
        </section>
      ))}
    </div>
  );
}

export default Designed;
