import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Info = () => {
  return (
    <motion.div
      whileInView={{ x: [-200, 50, 0], opacity: [0, 0, 1] }}
      
      // transition={{ duration: 0.9 }}
      className="bg-white -mt-[150px] md:-mt-[120px] w-[570px] h-[780px] md:h-[280px] lg:h-[220px] ml-7 md:mx-[40px] md:w-[50rem] lg:w-[80rem] rounded-xl px-8 shadow-lg flex flex-col md:flex-row gap-4  justify-center md:items-center"
    >
      <div className="bg-bg_secondary rounded-xl p-4 border-2 md:w-[660px] lg:w-[450px] text-[15px] flex-col gap-3 lg:h-[180px] md:h-[200px] mt-4 lg:mt-3 md:mt-5">
        <h1 className="font-[550] text-2xl md:text-lg py-2 lg:py-1">
          Personal Details
        </h1>
        <hr className=" border-separate" />
        <div className="flex flex-col gap-1 pt-2 text-xl md:text-[13px]">
          <p>
            Email:<span className="text-textColor">ssdeen313@gmial.com</span>
          </p>
          <p>
            Phone:<span className="text-textColor"> +2349011855909</span>
          </p>
          <p>
            Nationality:<span className="text-textColor"> Nigerian</span>
          </p>
        </div>
      </div>

      <div className="mt-1">
        <h1 className="text-3xl md:text-2xl mt-2 lg:my-3">
        <span className=" font-semibold">
        I'm Shamsudeen Omotoso
        </span>
          <span className="text-secondary font-semibold">
            <Typewriter
              options={{
                strings: [
                  "Front-End Developer",
                  "Back-End Developer",
                  "Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p className="text-textColor text-2xl leading-[2.3rem] md:leading-normal md:text-[16px]">
          I'm a Software Developer || Front-end with over 1+ years of
          experience. With a passion for creating interactive, and user-friendly
          Dynamic web & Mobile Applications. As a Full-stack Software Developer,
          I am devoted to utilizing my acquired programming skills positively
          impact any organization I am part of. I am a dedicated engineer who
          gets the job done through a willingness to learn, effective
          communication, and collaboration.
        </p>
      </div>
    </motion.div>
  );
};

export default Info;
