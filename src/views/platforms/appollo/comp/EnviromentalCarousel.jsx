import { useEffect, useRef, useState } from "react";

const ENVIRONMENTS = [
  {
    title: "Amazon Web Services",
    bg: "https://www.palantir.com/assets/xrfr7uokpv1b/6UUWreZOkKepESlP1RmcOg/031d4065937d329c2c8b02d7e7b57086/image-1.svg?quality=70&width=700",
  },
  {
    title: "AWS Outposts",
    bg: "https://www.palantir.com/assets/xrfr7uokpv1b/6Ub6PoYro178wZpaROqDEJ/805f8f913e6adee0dccf2c154c9e62f8/AWS_Outposts_Web_block_image.svg?quality=70&width=700",
  },
  {
    title: "Microsoft Azure",
    bg: "https://www.palantir.com/assets/xrfr7uokpv1b/uFFf3i9EmKwMkaysjOb9o/c065b560617f89745de7c2aa5b1b5f20/image-2.svg?quality=70&width=700",
  },
  {
    title: "Google Cloud Platform",
    bg: "https://www.palantir.com/assets/xrfr7uokpv1b/3Gf7vTaVJ0CwDOJ9Dz1rKy/db777d84aeefbc8525ce92adc9c3ca6b/image-3.svg?quality=70&width=700",
  },
  {
    title: "Private Cloud",
    bg: "https://www.palantir.com/assets/xrfr7uokpv1b/5z6fZrtL8iCzFW5LF7KdFm/a4182c671ff3361a21864197c01e9873/image-4.svg?quality=70&width=700",
  },
  {
    title: "On-Premises",
    bg: "https://www.palantir.com/assets/xrfr7uokpv1b/1in7qnbOuaXHkspMaNch9l/c97cc56b9508e5f8c32c043f11618e6b/image-6.svg?quality=70&width=700",
  },
  {
    title: "Hybrid Cloud",
    bg: "https://www.palantir.com/assets/xrfr7uokpv1b/40hbeQcqkw0sKWStH72VbU/780230e63af472b4567843299022fdd2/image-5.svg?quality=70&width=700",
  },
  {
    title: "Air Gapped Networks",
    bg: "https://www.palantir.com/assets/xrfr7uokpv1b/5GRsRsmfsAS4hKsanqaEcj/7ad0c6e74dc324d29a78ed8654254ad9/image-7.svg?quality=70&width=700",
  },
  {
    title: "Ruggedized Environments",
    bg: "https://www.palantir.com/assets/xrfr7uokpv1b/5Qu2VOubcGgKaoDIYBTkXX/710ee1d041099f68f69956cb6f21ad93/image-8.svg?quality=70&width=700",
  },
];

export default function ProductionEnvironments() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const xPos = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.6;
    let animationId;

    const animate = () => {
      if (!isPaused) {
        xPos.current -= speed;
        // Reset when half the track (one full set of images) has passed
        if (Math.abs(xPos.current) >= track.scrollWidth / 2) {
          xPos.current = 0;
        }
        track.style.transform = `translate3d(${xPos.current}px, 0, 0)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <>
      <section className="w-full bg-white px-6 lg:px-20 py-16 md:py-32 overflow-hidden">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-light max-w-4xl mb-12 md:mb-20 leading-tight">
          From one to many environments
        </h2>

        <div 
          className="relative overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={trackRef} 
            className="flex gap-4 md:gap-6 w-max will-change-transform"
          >
            {[...ENVIRONMENTS, ...ENVIRONMENTS].map((env, i) => (
              <EnvironmentCard key={i} {...env} />
            ))}
          </div>
        </div>
      </section>
      <hr className="w-[90%] md:w-[95%] mx-auto border-gray-200" />
    </>
  );
}

function EnvironmentCard({ title, bg }) {
  return (
    <article className="relative min-w-[220px] md:min-w-[300px] h-[260px] md:h-80 bg-black rounded-xl md:rounded-2xl overflow-hidden flex items-end shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover opacity-90 h-[200px] md:h-[260px] border-b border-white/10"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="relative p-5 md:p-8 w-full bg-linear-to-t from-black/90 via-black/40 to-transparent">
        <h3 className="text-white text-xs md:text-sm font-semibold tracking-widest uppercase">
          {title}
        </h3>
      </div>
    </article>
  );
}