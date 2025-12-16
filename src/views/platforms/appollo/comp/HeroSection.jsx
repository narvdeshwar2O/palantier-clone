import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-white">
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 lg:px-10 py-6 mt-20 relative">
        <div className="text-xl font-medium">Apollo</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Product</a>
          <a href="#" className="hover:text-black">Pricing</a>
          <a href="#" className="hover:text-black">Explore Solutions</a>
          <a href="#" className="hover:text-black">Content Hub</a>
          <a href="#" className="hover:text-black">Developer Docs</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white border-t shadow-md md:hidden">
            <div className="flex flex-col px-6 py-6 gap-4 text-sm text-gray-700">
              <a href="#" className="hover:text-black">Product</a>
              <a href="#" className="hover:text-black">Pricing</a>
              <a href="#" className="hover:text-black">Explore Solutions</a>
              <a href="#" className="hover:text-black">Content Hub</a>
              <a href="#" className="hover:text-black">Developer Docs</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] gap-10 px-6 lg:px-10 py-20 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-6xl font-light">Apollo</h1>
          <p className="text-5xl font-light leading-tight max-w-xl">
            Deploy Software Beyond Limits.
          </p>

          <button className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-md text-sm hover:opacity-90 transition">
            Request a demo
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://www.palantir.com/assets/xrfr7uokpv1b/2xGl0O6LjxBjXZF5XetpIV/25f25427282acc622dd9eb06284cc23e/shutterstock_2197639027.jpg?quality=70&width=2200"
            alt="Hero graphic"
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
