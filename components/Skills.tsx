import React from "react";
import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu2";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiSolidFileCss,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandCpp, TbBrandVscode } from "react-icons/tb";
import { PiFileSqlDuotone } from "react-icons/pi";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="h-screen flex flex-col text-center max-w-6xl px-10 mx-auto items-center justify-start gap-16">
      <h3 className="my-12 mt-24 uppercase tracking-[15px] font-semibold text-gray-400 text-xl ">
        Skills
      </h3>
      <div className=" grid grid-cols-3 gap-8">
        <AiFillHtml5 size={56} />
        <BiSolidFileCss size={56} />
        <BiLogoTailwindCss size={56} />
        <BiLogoJavascript size={56} />
        <BiLogoPython size={56} />
        <TbBrandCpp size={56} />
        <PiFileSqlDuotone size={56} />
        <BiLogoReact size={56} />
        <TbBrandVscode size={56} />
      </div>
    </div>
  );
};

export default Skills;
