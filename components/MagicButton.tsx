import React, { useState, useEffect } from "react";

/**
 * UI: border magic from tailwind css btns
 * Safari-compatible version - shows plain button in Safari, animated in other browsers
 */

type ColorVariant = "default" | "blue" | "purple" | "mono" | "gradient";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  variant = "default",
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  variant?: ColorVariant;
}) => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect Safari browser
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafariBrowser =
      userAgent.includes("safari") && !userAgent.includes("chrome");
    setIsSafari(isSafariBrowser);
  }, []);

  // Animated gradient classes for non-Safari browsers
  const colorVariants = {
    default: "bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500",
    blue: "bg-gradient-to-r from-blue-800 via-blue-500 to-blue-600",
    purple: "bg-gradient-to-r from-purple-800 via-purple-500 to-violet-500",
    mono: "bg-gradient-to-r from-gray-700 via-gray-500 to-gray-600",
    gradient: "bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500",
  };

  // Plain colors for Safari
  const safariColors = {
    default: "bg-blue-600",
    blue: "bg-blue-700",
    purple: "bg-purple-600",
    mono: "bg-gray-600",
    gradient: "bg-purple-600",
  };

  if (isSafari) {
    // Plain button for Safari
    return (
      <button
        className={`inline-flex h-12 w-full md:w-60 md:mt-10 items-center justify-center 
                   rounded-lg px-7 text-sm font-medium text-white gap-2 
                   ${safariColors[variant]} hover:opacity-90 transition-opacity 
                   focus:outline-none ${otherClasses}`}
        onClick={handleClick}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </button>
    );
  }

  // Animated button for other browsers
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none group"
      onClick={handleClick}
    >
      {/* Animated border */}
      <span
        className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${colorVariants[variant]}`}
      />

      {/* Button content */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
              bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
