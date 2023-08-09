"use client";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory overflow-scroll text-whilte md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-cyan-400/60">
      <Header />

      <section id="about" className="snap-start">
        <Hero />
      </section>
      {/* <section id="skills" className="snap-center">
        <Skills />
      </section> */}

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}
