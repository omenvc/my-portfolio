"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { getProjectImage, getScreenshotUrl } from "@/lib/getProjectImage";

const ProjectImage = ({ 
  src, 
  link, 
  alt, 
  className 
}: { 
  src: string; 
  link: string; 
  alt: string; 
  className: string;
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // If it's a local image, use it directly
    if (src.startsWith("/")) {
      setImageSrc(src);
      setIsLoading(false);
      return;
    }

    // Use the provided image URL (which should be from data/index.ts)
    setImageSrc(src);
    setIsLoading(false);
  }, [src, link]);

  if (hasError) {
    return (
      <div className={`${className} bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center rounded-lg`}>
        <span className="text-white text-xs opacity-50 px-2 text-center">Image unavailable</span>
      </div>
    );
  }

  // Use regular img tag for external URLs to avoid Next.js Image optimization issues
  if (imageSrc.startsWith("http")) {
    return (
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300 object-contain`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          // Try fallback screenshot
          if (link.startsWith("http") && !link.includes("apps.apple.com")) {
            setImageSrc(getScreenshotUrl(link));
          } else {
            setHasError(true);
          }
        }}
      />
    );
  }

  // Use Next.js Image for local images
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={400}
      height={300}
      className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300 object-contain`}
      onLoad={() => setIsLoading(false)}
      onError={() => setHasError(true)}
    />
  );
};

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <ProjectImage
                  src={item.img}
                  link={item.link}
                  alt={`${item.title} cover`}
                  className="z-10 absolute bottom-0 object-contain max-h-full"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 text-white tracking-tight mb-2">
                {item.title}
              </h1>

              <p
                className="lg:text-base lg:font-normal font-light text-sm line-clamp-2 leading-relaxed"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-[BEC1DD] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex lg:text-base md:text-xs text-sm text-purple font-medium hover:text-purple-300 transition-colors duration-200 items-center group"
                  >
                    Check Live Site
                    <FaLocationArrow className="ms-2 group-hover:translate-x-1 transition-transform duration-200" color="#CBACF9" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
