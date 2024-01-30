"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Service from "@/sections/ Service";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Work from "@/sections/Work";
const Home = () => {
  return (
    <main>
      <section className=" w-full overflow-hidden">
        <Hero />
      </section>
      {/* <section>
        <About />
      </section> */}
      <section>
        <Service />
      {/* </section>
      <Experience />
      <section> */}
        <Work />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
