import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { GoDownload } from "react-icons/go";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="bg-bg-hero w-full h-screen bg-no-repeat bg-cover mb-[-3rem]">
      <div className="absolute mt-8">
        <Header />
      </div>
      <div className="absolute ml-[38%] mt-[13%] items-center justify-center">
        <Image
          src="/assets/images/shams.jpg"
          alt="shams"
          width={220}
          height={220}
          className="rounded-full border-4 border-white items-center justify-center ml-16"
        />
        <h1 className="text-white text-3xl font-bold mt-5">
          Here I'm Programmer Shams{" "}
        </h1>
        <p className="text-white text-center mt-3 text-lg">
          I'm a Passionate{" "}
          <span className="text-secondary">Software Developer</span>
        </p>
      </div>
      <div className="absolute ml-[40%] mt-[37%] items-center justify-center flex flex-row gap-3">
        <Button width="120" BtnText="Hire Me" />
        <Button width="170" BtnText="Download CV" BtnIcon={<FiDownload />} />
      </div>
    </div>
  );
};

export default Hero;
