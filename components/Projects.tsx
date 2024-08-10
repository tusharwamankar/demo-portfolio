import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const Projects = [1, 2, 3, 4];
  return (
    <div className="h-screen flex relative flex-col text-center px-10 mx-auto items-center justify-evenly">
      <h3 className="mt-24 uppercase tracking-[15px] font-semibold text-gray-400 text-xl ">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-cyan-400/60">
        <div className="w-screen flex-shrink-0 flex flex-col snap-center justify-center items-center p-20">
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
          <div className="text-cener flex flex-col gap-5 justify-start h-[50%]">
            <a
              onClick={() => parent.open("https://portfolio-lkqugqdvj-tusharwamankar.vercel.app/")}
              className="font-semibold text-cyan-100/80 uppercase text-2xl tracking-widest cursor-pointer"
            >
              Portfolio
            </a>
            <li className="text-gray-200 flex gap-7">
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
        <div className="w-screen flex-shrink-0 flex flex-col snap-center justify-center items-center p-20">
          <motion.img
            initial={{
              opacity: 0,
              y: -300,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            src="/doshare.png"
            height={300}
            width={300}
            alt="Doshare"
          />
          <div className="text-cener flex flex-col gap-5 justify-start h-[50%]">
            <a
              onClick={() => parent.open("https://do-share.vercel.app/")}
              className="font-semibold text-cyan-100/80 uppercase text-2xl tracking-widest cursor-pointer"
            >
              DoShare
            </a>
            <li className="text-gray-200 flex gap-7">
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
                src="/firebase.png"
                height={40}
                width={40}
                alt="ts"
                className="imgtag"
              />
            </li>
            <p className="text-left leading-8 text-gray-200"></p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 flex flex-col snap-center justify-center items-center p-20">
          <motion.img
            initial={{
              opacity: 0,
              y: -300,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            src="/color-pickerr.png"
            height={450}
            width={450}
            alt="color-picker"
          />
          <div className="text-cener flex flex-col gap-5 justify-start h-[50%]">
            <a
              onClick={() => parent.open("https://github.com/tusharwamankar/Color-Picker")}
              className="font-semibold text-cyan-100/80 uppercase text-2xl tracking-widest cursor-pointer"
            >
              Color Picker
            </a>
            <li className="text-gray-200 flex gap-7">
              <Image
                src="/html.png"
                height={40}
                width={40}
                alt="react"
                className="imgtag"
              />
              <Image
                src="/css.png"
                height={40}
                width={40}
                alt="nextjs"
                className="imgtag"
              />
              <Image
                src="/js.png"
                height={40}
                width={40}
                alt="tailwind"
                className="imgtag"
              />
              
            </li>
            <p className="text-left leading-8 text-gray-200"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
