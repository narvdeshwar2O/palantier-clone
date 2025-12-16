import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    const speed = 0.3;

    const animate = () => {
      x -= speed;
      if (Math.abs(x) >= track.scrollWidth / 2) x = 0;
      track.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <section className="w-full bg-white px-6 lg:px-20 py-32 overflow-hidden">
        {/* Heading */}
        <h2 className="text-5xl lg:text-7xl font-light max-w-4xl mb-20">
          From one to many environments
        </h2>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div ref={trackRef} className="flex gap-6 w-max">
            {[...ENVIRONMENTS, ...ENVIRONMENTS].map((env, i) => (
              <EnvironmentCard key={i} {...env} />
            ))}
          </div>
        </div>
      </section>
      <hr className="w-[95%] mx-auto" />
    </>
  );
}

function EnvironmentCard({ title, bg }) {
  return (
    <article className="relative min-w-60 h-[300px] bg-black rounded-2xl overflow-hidden flex items-end">
      {/* Background image (SVG arcs / patterns) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover opacity-80 h-[250px] border-b border-white"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Title */}
      <div className="relative p-6">
        <h3 className="text-white text-sm font-medium tracking-wide">
          {title}
        </h3>
      </div>
    </article>
  );
}
