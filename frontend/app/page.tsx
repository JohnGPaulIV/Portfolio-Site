import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Skills } from "@/components/portfolio/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className={`min-h-screen bg-background`}>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

{/*<div className="w-full h-88 border-b border-[oklch(0.1906_0.0691_260)] overflow-hidden">
  <div className="relative bg-white w-full aspect-square">
    <div className="absolute border border-[oklch(0.1906_0.0691_260)] inset-0 grid grid-cols-60 grid-rows-60 gap-px bg-[oklch(0.1906_0.0691_260)]">
      {Array.from({ length: 60 * 60 }).map((_, i) => (
        <div key={i} className="bg-[oklch(0.0906_0.0691_260)]" />
      ))}
    </div>

    <div className="absolute inset-0 w-full h-88 flex flex-row justify-end items-center">
      <div className="w-5/7 h-88 flex flex-row justify-center items-center">
        <div className="w-70 h-70 rounded-full overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 w-full h-full hero-img"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0) 20%, rgba(0,0,0,0.80) 80%)'
            }}
          ></div>
        </div>
      </div>
    </div>
  </div>
</div>*/}