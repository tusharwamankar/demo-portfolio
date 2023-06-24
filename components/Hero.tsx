import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen">
      <nav className="sticky top-0 flex justify-between max-w-6xl mx-auto p-5 ">
        <div className="social">
          <SocialIcon
            url="https://github.com/tusharwamankar"
            bgColor="transparent"
            fgColor="gray"
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
          <SocialIcon
            url="https://www.instagram.com/__rahsut__/"
            bgColor="transparent"
            fgColor="gray"
          ></SocialIcon>
        </div>
        <div className="flex items-center">
          <SocialIcon
            network="email"
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
          ></SocialIcon>
          <a
            href="/My_Resume.pdf"
            className="uppercase tracking-[3px] text-gray-400 font-semibold text-sm hidden md:inline-flex "
          >
            Resume
          </a>
        </div>
      </nav>
      <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-sans tracking mt-24 ">
          Tushar Kumar Wamankar
        </h1>
        <p className="mt-20 text-xl">
          <span className="text-red-300">Web Developer</span> currently persuing
          MCA at NIT Kurukshetra
        </p>
      </div>
      <div className="flex gap-8 justify-center mt-20 flex-wrap">
        <a href="#about"className="border px-6 py-2 rounded-full uppercase tracking-[3px] text-sm text-gray-300 hover:border-[#F7DC2C] hover:font-bold">About</a>
        <a href="#projects"className="border px-6 py-2 rounded-full uppercase tracking-[3px] text-sm text-gray-300 hover:border-[#F7DC2C] hover:font-bold">Projects</a>
        <a href="#skills"className="border px-6 py-2 rounded-full uppercase tracking-[3px] text-sm text-gray-300 hover:border-[#F7DC2C] hover:font-bold">Skills</a>
        <a href="#contact"className="border px-6 py-2 rounded-full uppercase tracking-[3px] text-sm text-gray-300 hover:border-[#F7DC2C] hover:font-bold">Contact</a>
      </div>
    </div>
  );
};

export default Hero;
