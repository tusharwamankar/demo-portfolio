import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Web Developer", "C++ Coder"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col md:flex-row items-center md:my-12 justify-around max-w-5xl mx-auto text-center my-auto h-screen">
      <div className="flex items-center justify-center mx-32">
        {/* image */}
        <Image
          src="/avatar.png"
          height={300}
          width={300}
          alt="avatar"
          className="rounded-full mt-16 p-4 md:mt-0 md:p-0"
        />
      </div>
      <div className="flex flex-col gap-7 w-4/5 text-left">
        {/* description */}
        <h3 className="text-2xl">
          Hi, i&apos;m{" "}
          <span className="text-cyan-500">
            {text} <span className="animate-ping">|</span>{" "}
          </span>
        </h3>
        <h1 className="text-5xl font-semibold text-cyan-500">
          Tushar Wamankar
        </h1>
        <p className="text-white/80 leading-7">
          I am a highly motivated individual who is always eager to learn and
          improve. I reside in Bhopal, famously known as the City of Lakes.
          Currently, I am pursuing my Masters in Computer Applications from NIT
          Kurukshetra, one of the most prestigious technical institutions in
          India.
        </p>
        <div className="">
          <a
            href="My_Resume.pdf"
            target="#"
            className="bg-cyan-500 px-6 py-2 border-2 border-cyan-500 rounded-xl text-black cursor-pointer hover:bg-[#242424] hover:text-white duration-300"
          >
            Resume
          </a>
        </div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center"
        >
          <SocialIcon
            url="https://github.com/tusharwamankar"
            bgColor="transparent"
            fgColor="gray"
            className="social-icons"
          ></SocialIcon>
          <SocialIcon
            url="https://www.linkedin.com/in/tushar-wamankar-430090216/"
            bgColor="transparent"
            fgColor="gray"
            className="social-icons"
          ></SocialIcon>
          <SocialIcon
            network="email"
            url="mailto:tusharwamankar10@gmail.com"
            fgColor="gray"
            className="social-icons"
            bgColor="transparent"
          ></SocialIcon>
          <SocialIcon
            url="https://api.whatsapp.com/send/?phone=917049258342&text&type=phone_number&app_absent=0"
            bgColor="transparent"
            fgColor="gray"
            className="social-icons"
          ></SocialIcon>
          {/* <SocialIcon
              url="https://www.instagram.com/__rahsut__/"
              bgColor="transparent"
              fgColor="gray"
            ></SocialIcon> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
