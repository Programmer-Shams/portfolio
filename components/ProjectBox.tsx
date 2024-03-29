"use client";
import Image from "next/image";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { HiViewfinderCircle } from "react-icons/hi2";
import { GrFormView } from "react-icons/gr";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Transition, motion } from "framer-motion";

import { useEffect, useState } from "react";
import Link from "next/link";

type MotionProps = {
  y: number[];
  opacity: number[];
};

type BoxProps = {
  imgUrl: string;
  name?: string;
  projectStackIcons: string[];
  projectSlider: string[];
  description: string;
  projectUrl: string;
  github: string | undefined;
  motionProps: MotionProps | undefined 
  duration: Transition | undefined;
};

const ProjectBox = ({
  imgUrl,
  name,
  projectStackIcons,
  projectSlider,
  description,
  projectUrl,
  github,
  motionProps,
  duration
}: BoxProps) => {
  const [openProject, setOpenProject] = useState(false);
  const [activeSlide, setActiveSlide] = useState(2);
  useEffect(() => {
    if (openProject) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup function to reset overflow style when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openProject]);

  const prevSlide = () => {
    const isFirstSlide = activeSlide === 0;
    const newSlide = isFirstSlide ? projectSlider.length - 1 : activeSlide - 1;
    setActiveSlide(newSlide);
  };
  const nextSlide = () => {
    const isLastSlide = activeSlide === projectSlider.length - 1;
    const newSlide = isLastSlide ? 0 : activeSlide + 1;
    setActiveSlide(newSlide);
  };
  const handleOpenProject = () => {
    setOpenProject(!openProject);
  };
  return (
    <section>
      <motion.div
      whileInView={motionProps}
      transition={duration}
       className="rounded-xl lg:w-[300px] lg:h-[300px] w-[550px] h-[500px] bg-white p-3 shadow-xl">
        <div className="flex items-center justify-center mt-3">
          <Image
            src={imgUrl}
            alt="projectimage"
            width={260}
            height={280}
            className="w-[500px] h-[310px] lg:w-[260px] lg:h-[160px]"
          />
        </div>
        <p className="font-semibold p-2 text-3xl md:text-lg">{name}</p>
        <div className="flex flex-row justify-between p-2 mt-5 items-center">
          <button
            className="bg-secondary text-white w-[120px] h-[50px] md:w-[85px] md:h-[30px] text-[1.7rem] rounded-lg font-semibold items-center justify-center flex text-3xl md:text-base px-5 cursor-pointer"
            onClick={handleOpenProject}
          >
            Explore
            {/* <span><HiArrowNarrowRight /></span> */}
          </button>
          <div className="flex flex-row gap-3">
            {projectStackIcons.map((icon, i) => (
              <Image
                key={i}
                src={icon}
                width={25}
                height={25}
                alt="iconimage"
                className="rounded-full md:h-[18px] md:w-[20px] h-[30px] w-[30px]"
              />
            ))}
          </div>
        </div>
      </motion.div>
      <div>
        {openProject && (
          <div className="modal bg-[rgba(49,49,49,0.8)]  w-full">
            <div onClick={handleOpenProject} className="overlay" />
            <div className="modal-content bg-bg_secondary">
              {/* Carousel  */}
              <div className="w-full h-[350px] rounded-2xl duration-500 bg-contain">
                <div className="max-w-[1400px] h-full w-full m-auto py-16 px-4 relative group">
                  <div
                    style={{
                      backgroundImage: `url(${projectSlider[activeSlide].url})`,
                    }}
                    className="w-full h-[320px] -ml-4 -mt-12 rounded-2xl bg-contain bg-center bg-no-repeat  duration-700 absolute"
                  ></div>
                  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <MdOutlineKeyboardArrowLeft size={30} onClick={prevSlide} />
                  </div>
                  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <MdOutlineKeyboardArrowRight
                      size={30}
                      onClick={nextSlide}
                    />
                  </div>
                  {/* <div className="flex top-4 justify-center p-2">
                    {projectSlider.map((slide, i) => (
                      <div className="text-2xl cursor-pointer">
                        <RxDotFilled
                          key={i}
                          size={30}
                          className={`${
                            i === activeSlide ? "text-secondary" : "text-white"
                          } cursor-pointer mt-10`}
                          onClick={() => setActiveSlide(i)}
                        />
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>

              {/* Details  */}
              <div>
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="mt-2 leading-normal text-[20px] md:text-base">{description}</p>
                <div className="flex flex-row items-center justify-between mt-8">
                  <a
                    href={github}
                    className="bg-secondary w-[100px] h-[40px] text-white rounded-lg font-bold flex flex-row items-center justify-center gap-2 cursor-pointer"
                  >
                    GitHub{" "}
                    <span>
                      <FaGithub />
                    </span>
                  </a>
                  <a
                    href={projectUrl}
                    className="bg-secondary w-[100px] h-[40px] text-white rounded-lg font-bold flex flex-row items-center justify-center gap-2"
                  >
                    View{" "}
                    <span>
                      <HiViewfinderCircle />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectBox;
