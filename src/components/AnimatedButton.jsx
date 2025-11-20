import { CornerDownRight } from "lucide-react";

function AnimatedButton({ title }) {
  return (
    <div className="group flex gap-2 cursor-pointer mt-1">
      <div className="relative inline-flex items-center">
        <CornerDownRight className="text-gray-50 mb-1" />
        <span className="absolute right-0 bottom-0 h-px bg-gray-50 w-full group-hover:w-0 transition-all duration-700"></span>
      </div>
      <button className="relative text-gray-50 inline-flex items-center cursor-pointer">
        {title}
        <span className="absolute right-0 bottom-0 h-px bg-gray-50 w-full group-hover:w-0 transition-all duration-700"></span>
      </button>
    </div>
  );
}

export default AnimatedButton;
