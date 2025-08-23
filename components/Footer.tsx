import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-0" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1920}
          height={1080}
          className="w-full h-full opacity-50 object-cover"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div
          onClick={() => {
            // Create a temporary link and click it
            const link = document.createElement("a");
            link.href =
              "mailto:emmmanard9@gmail.com?subject=Let's discuss your project&body=Hi Emmanuel,%0D%0A%0D%0AI'm interested in discussing a project with you.%0D%0A%0D%0ABest regards,";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Show fallback options after a delay
            setTimeout(() => {
              const userChoice = confirm(
                "If your email app didn't open automatically, you can:\n\n" +
                  "✉️ Copy my email address: emmmanard9@gmail.com\n" +
                  "📧 Or email me manually\n\n" +
                  "Click OK to copy my email address to clipboard"
              );

              if (userChoice) {
                navigator.clipboard
                  .writeText("emmmanard9@gmail.com")
                  .then(() => {
                    alert(
                      "📋 Email address copied to clipboard!\n\nemmmanard9@gmail.com"
                    );
                  })
                  .catch(() => {
                    alert("📧 Please email me at:\nemmmanard9@gmail.com");
                  });
              }
            }, 2000);
          }}
          className="cursor-pointer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-0 pb-0">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Emmanuel Omunizua. All rights reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-100 transition-all duration-300"
              onClick={() => {
                let url = "";

                // Map icons to your social media URLs
                if (info.img.includes("git")) {
                  url = "https://github.com/Emmanard"; // Replace with your GitHub username
                } else if (info.img.includes("twit")) {
                  url = "https://x.com/emmanard9?s=21"; // Replace with your Twitter username
                } else if (info.img.includes("link")) {
                  url =
                    "https://www.linkedin.com/in/emmanuel-omunizua-80b380301"; // Replace with your LinkedIn username
                }

                if (url) {
                  window.open(url, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
