import {cn} from "../lib/utils/utils"
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  // Base styles for all buttons
  const baseStyles =
    "cursor-pointer border rounded-[2px] transition-all duration-500 ease-in-out flex items-center justify-center";

  // Style variants
  const variants = {
    default:
      "bg-white text-black border hover:bg-[#1e2124]/90 hover:text-white hover:border-none",
    outline:
      "bg-transparent text-black border hover:bg-[#1e2124]/90 hover:text-white hover:border-none",
  };

  // Size variants
  const sizes = {
    xs:"px-2 py-1 text-[10px]",
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-10 py-3 text-lg",
    icon: "p-2",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
