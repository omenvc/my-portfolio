import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */

type ColorVariant = 'default' | 'blue' | 'purple' | 'mono' | 'gradient';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  variant = 'default'
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  variant?: ColorVariant;
}) => {
  
  // Color combinations that work with black/white/blue/purple theme
  const colorVariants = {
    // Cool blue to purple gradient
    default: "bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#8b5cf6_50%,#3b82f6_100%)]",
    
    // Monochromatic blue shades
    blue: "bg-[conic-gradient(from_90deg_at_50%_50%,#1e40af_0%,#3b82f6_25%,#60a5fa_50%,#3b82f6_75%,#1e40af_100%)]",
    
    // Purple to violet gradient
    purple: "bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#8b5cf6_25%,#a78bfa_50%,#8b5cf6_75%,#6d28d9_100%)]",
    
    // Subtle monochrome (works great with dark themes)
    mono: "bg-[conic-gradient(from_90deg_at_50%_50%,#374151_0%,#6b7280_25%,#9ca3af_50%,#6b7280_75%,#374151_100%)]",
    
    // Dynamic gradient with multiple colors
    gradient: "bg-[conic-gradient(from_90deg_at_50%_50%,#1e40af_0%,#3b82f6_20%,#8b5cf6_40%,#a855f7_60%,#8b5cf6_80%,#1e40af_100%)]"
  };

  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${colorVariants[variant]}`} />
      
      {/* remove px-3 py-1, add px-5 gap-2 */}
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