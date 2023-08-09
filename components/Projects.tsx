import React from "react";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center px-10 mx-auto items-center justify-evenly ">
      <h3 className="mt-24 uppercase tracking-[15px] font-semibold text-gray-400 text-xl ">
        Projects
      </h3>
      {/* <div className="w-full absolute top-[30%] bg-cyan-500/10 h-[380px] -skew-y-12"></div> */}
      <div className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-cyan-400/60 h-screen">
        <div className="flex flex-col w-screen flex-shrink-0 snap-center justify-center items-center text-center gap-5 p-12">
          <Image
            src="/portfolio-home.png"
            height={300}
            width={300}
            alt="portfolio"
            className=""
          />
          <h1 className="font-bold text-red-500/80">Portfolio - Next.js</h1>
          <p>
            <li className="text-gray-200">
              Tailwind Css, react-icons, framer-motion, typewriter, tailwind
              scrollbar
            </li>
          </p>
        </div>
        <div className="flex flex-col w-screen flex-shrink-0 snap-center justify-center items-center text-center gap-5 p-12">
          <img src="/brain.png" className="h-32 mix-blend-darken" />
          <h1 className="font-bold text-red-500/80">
            Sign Language Detection System
          </h1>
          <p>
            <li className="text-gray-200">
              Python, OpenCV, CNN model, Mediapipe Landmark System
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
