import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="w-full bg-white min-h-screen flex flex-col">
      {/* Navigation - Hidden on mobile, visible on md and up */}
      <nav className="hidden md:block fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center justify-between px-10 py-5 max-w-[1440px] mx-auto">
          <div className="text-xl font-bold tracking-tighter text-black">
            Apollo
          </div>

          <div className="flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black transition-colors">
              Product
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Solutions
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Content
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Docs
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center mt-14 md:mt-0">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-10 pt-10 md:pt-40 pb-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-gray-400 tracking-widest uppercase">
                Apollo
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-gray-900">
                Deploy Software <br className="hidden md:block" />
                Beyond Limits.
              </h1>
            </div>

            <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 font-light">
              The platform for autonomous deployment across any environment,
              from cloud to edge.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-transform active:scale-95">
                Request a demo
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[550px] aspect-[4/3] sm:aspect-video lg:aspect-square">
              <img
                src="https://www.palantir.com/assets/xrfr7uokpv1b/2xGl0O6LjxBjXZF5XetpIV/25f25427282acc622dd9eb06284cc23e/shutterstock_2197639027.jpg?quality=70&width=2200"
                alt="Apollo Deployment Graphic"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
