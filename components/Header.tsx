import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex justify-between max-w-6xl mx-auto p-8 z-20">
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
        className="social flex items-center"
      >
        <a href="#about" className="navbar-icons">
          Home
        </a>
        {/* <a href="#skills" className="navbar-icons">
          Skills
        </a> */}
        <a href="#projects" className="navbar-icons">
          Projects
        </a>
        <a href="#contact" className="navbar-icons">
          Contact
        </a>
      </motion.div>
      <motion.div></motion.div>
    </header>
  );
};

export default Header;
