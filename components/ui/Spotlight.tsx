import { cn } from "@/lib/utils";
import React from "react";

type SpotlightProps = {
  className?: string;
  fill?: string;
  intensity?: "soft" | "medium" | "bright" | "intense";
};

export const Spotlight = ({
  className,
  fill,
  intensity = "medium",
}: SpotlightProps) => {
  // Different lighting configurations
  const lightingConfig = {
    soft: {
      fillOpacity: "0.15",
      blur: "200",
      innerGlow: "0.08",
    },
    medium: {
      fillOpacity: "0.25",
      blur: "151",
      innerGlow: "0.12",
    },
    bright: {
      fillOpacity: "0.35",
      blur: "120",
      innerGlow: "0.18",
    },
    intense: {
      fillOpacity: "0.45",
      blur: "100",
      innerGlow: "0.25",
    },
  };

  const config = lightingConfig[intensity];

  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        {/* Main spotlight ellipse */}
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity={config.fillOpacity}
        ></ellipse>

        {/* Inner glow for more realistic lighting */}
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1400"
          ry="200"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity={config.innerGlow}
          filter="url(#innerGlow)"
        ></ellipse>
      </g>

      <defs>
        {/* Main blur filter */}
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation={config.blur}
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>

        {/* Inner glow filter for enhanced lighting */}
        <filter
          id="innerGlow"
          x="0"
          y="0"
          width="100%"
          height="100%"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="80" result="glow"></feGaussianBlur>
          <feColorMatrix
            in="glow"
            type="matrix"
            values="1 1 1 0 0  1 1 1 0 0  1 1 1 0 0  0 0 0 1 0"
          ></feColorMatrix>
        </filter>

        {/* Radial gradient for more realistic falloff */}
        <radialGradient id="spotlightGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={fill || "white"} stopOpacity="0.4" />
          <stop offset="70%" stopColor={fill || "white"} stopOpacity="0.2" />
          <stop offset="100%" stopColor={fill || "white"} stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};
