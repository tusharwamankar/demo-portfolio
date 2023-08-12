import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center px-10 mx-auto items-center justify-evenly">
      <h3 className="mt-24 uppercase tracking-[15px] font-semibold text-gray-400 text-xl ">
        Projects
      </h3>
      {/* <div className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-cyan-400/60 h-screen"> */}
      <div className="flex flex-col  items-center h-[80%]">
        <div className="flex">
          <motion.img
            initial={{
              opacity: 0,
              y: -300,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            src="/mobile-view.png"
            height={300}
            width={300}
            alt="portfolio"
          />
        </div>
        <div className="text-cener flex flex-col gap-5 justify-start h-[50%]">
          <a
            href="#"
            className="font-semibold text-cyan-100/80 uppercase text-2xl tracking-widest"
          >
            Portfolio
          </a>
          <li className="text-gray-200 flex gap-7">
            {/* <Image src="/vscodee.png" height={40} width={40} alt="vscode" className="imgtag" /> */}
            <Image
              src="/reactt.png"
              height={40}
              width={40}
              alt="react"
              className="imgtag"
            />
            <Image
              src="/nextjss.png"
              height={40}
              width={40}
              alt="nextjs"
              className="imgtag"
            />
            <Image
              src="/tailwindd.png"
              height={40}
              width={40}
              alt="tailwind"
              className="imgtag"
            />
            <Image
              src="/ts.png"
              height={40}
              width={40}
              alt="ts"
              className="imgtag"
            />
          </li>
          <p className="text-left leading-8 text-gray-200"></p>
        </div>
      </div>
      {/* <div className="flex flex-col w-screen flex-shrink-0 snap-center justify-center items-center text-center gap-5 p-12">
          <img src="/brain.png" className="h-32 mix-blend-darken" />
          <h1 className="font-bold text-red-500/80">
            Sign Language Detection System
            </h1>
            <p>
            <li className="text-gray-200">
            Python, OpenCV, CNN model, Mediapipe Landmark System
            </li>
            </p>
          </div> */}
    </div>
  );
};

export default Projects;
