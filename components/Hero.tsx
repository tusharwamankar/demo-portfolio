import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cursor ,useTypewriter } from "react-simple-typewriter";


type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Web Developer", "C++ Coder"],
    loop:true,
    delaySpeed:2000,
  })
  return (
    <header className="h-screen  ">
      <nav className="sticky top-0 flex justify-between max-w-6xl mx-auto p-5 ">
        <motion.div
          initial={{
            x: -500,
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
          className="social flex items-center "
        >
          <a
            href="#about"
            className="mx-4 uppercase tracking-[3px] text-gray-400 font-semibold text-sm hover:text-cyan-400"
          >
            Home
          </a>
          <a
            href="#projects"
            className="mx-4 uppercase tracking-[3px] text-gray-400 font-semibold text-sm hover:text-cyan-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="mx-4 uppercase tracking-[3px] text-gray-400 font-semibold text-sm hover:text-cyan-400"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="mx-4 uppercase tracking-[3px] text-gray-400 font-semibold text-sm hover:text-cyan-400"
          >
            Contact
          </a>
        </motion.div>
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
            network="email"
            url="mailto:tusharwamankar10@gmail.com"
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
          ></SocialIcon>
        </motion.div>
      </nav>
      <div className="flex flex-col md:flex-row items-center justify-around max-w-5xl mx-auto text-center h-4/6">
        <div className="flex items-center justify-center mx-32">
          {/* image */}
          <Image
            src="/avatar.png"
            height={300}
            width={300}
            alt="avatar"
            className="rounded-full hidden md:flex"
          />
        </div>
        <div className="flex flex-col gap-7 w-4/5 text-left">
          {/* description */}
          <h3 className="text-2xl">
            Hi, i'm <span className="text-cyan-500">{text}</span>
          </h3>
          <h1 className="text-5xl font-semibold text-cyan-500">
            Tushar Wamankar
          </h1>
          <p className="text-white/80 leading-7">
          I am a highly motivated individual who is always eager to learn and improve. I reside in Bhopal, famously known as the City of Lakes. Currently, I am pursuing my Masters in Computer Applications from NIT Kurukshetra, one of the most prestigious technical institutions in India. 
          </p>
          <div className="">
            <a href="My_Resume.pdf" target="#" className="bg-cyan-400 px-6 py-2 border-2 border-cyan-500 rounded-xl text-black cursor-pointer hover:bg-[#242424] hover:text-white">
              Resume
            </a>
          </div>
          <div className="">
            <SocialIcon
              url="https://github.com/tusharwamankar"
              bgColor="transparent"
              fgColor="gray"
              className=""
            ></SocialIcon>
            <SocialIcon
              url="https://www.linkedin.com/in/tushar-wamankar-430090216/"
              bgColor="transparent"
              fgColor="gray"
            ></SocialIcon>
            <SocialIcon
              url="https://api.whatsapp.com/send/?phone=917049258342&text&type=phone_number&app_absent=0"
              bgColor="transparent"
              fgColor="gray"
            ></SocialIcon>
            {/* <SocialIcon
              url="https://www.instagram.com/__rahsut__/"
              bgColor="transparent"
              fgColor="gray"
            ></SocialIcon> */}
          </div>
        </div>
      </div>
      {/* <div className="flex gap-8 justify-center mt-20 flex-wrap">
        
      </div> */}
    </header>
  );
};

export default Hero;
