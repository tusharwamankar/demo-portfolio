import About from "../../components/About";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory overflow-scroll">
      <section  className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}
