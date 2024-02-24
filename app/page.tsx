"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar/Navbar";
import Service from "@/sections/ Service";
// import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Work from "@/sections/Work";
import "./App.scss";
const Home = () => {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <Service />
      {/* <Experience /> */}
      {/* <Work /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
