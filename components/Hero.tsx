"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full bg-[#17313E]  dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
          <p className="uppercase tracking-widest text-xs text-blue-100 font-medium mb-4 opacity-90">
            React Native • Next.js • Fintech • GovTech • Mobility
          </p>
          <TextGenerateEffect
            words="Building seamless mobile and web experiences that solve real-world problems."
            className="text-center text-[32px] md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
          />
          <p className="text-sm md:text-base text-blue-100 mt-6 leading-relaxed max-w-2xl">
            Hi! I&apos;m{" "}
            <span className="font-bold text-white text-glow">Chima Valentine</span>,<br />
            a <span className="font-semibold text-white">Software Engineer</span> specializing in React Native and modern web technologies, 
            passionate about crafting reliable and impactful digital products for fintech, 
            mobility, and government sectors.
          </p>
          <div onClick={() => scrollToSection("projects")} className="mt-10">
            <MagicButton
              title="Explore My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
