import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { GoDownload } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";
import Navbar from "@/components/Navbar/Navbar";

const Hero = () => {
  return (
    <div className="bg-bg-hero w-[630px] sm:w-full h-[135vh] md:h-[55rem] lg:h-[47rem] border-2 bg-cover bg-no-repeat" id="home">
      <div className="flex flex-col items-center justify-center mt-[16rem] lg:mt-44">
        <Image
          src="/assets/images/shams.jpg"
          alt="shams"
          width={220}
          height={220}
          className="rounded-full border-4 border-white"
        />
        <h1 className="text-white text-4xl lg:text-3xl font-bold mt-5 text-center">
          Here I'm Programmer <br /> Shams{" "}
        </h1>
        <p className="text-white text-center mt-3 text-2xl lg:text-lg">
          I'm a Passionate{" "}
          <span className="text-secondary">Software Developer</span>
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 mt-10">
        <Button width="150" BtnText="Contact Me" direct="https://wa.me/09011855909" BtnIcon={<IoIosRocket />} />
        <Button width="218" BtnText="Download CV" BtnIcon={<FiDownload />} direct="/resume.pdf" />
      </div>
    </div>
  );
};

export default Hero;