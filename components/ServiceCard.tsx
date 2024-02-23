import Link from "next/link";
import React from "react";
import { IconBaseProps } from "react-icons";
import { FaAngleRight } from "react-icons/fa";
import { Transition, motion } from "framer-motion";

type MotionProps = {
  y: number[];
  opacity: number[];
};

type ServiceCardProps = {
  name: string;
  icon: IconBaseProps;
  content: string;
  motionProps: MotionProps | undefined 
  duration: Transition | undefined;
};
// { y: [-250, -50, 0], opacity: [0, 0, 1] }
// { duration: 1 }
const ServiceCard = ({ name, icon, content, motionProps, duration }: ServiceCardProps) => {
  return (
    <motion.div
      whileInView={motionProps}
      transition={duration}
      className="bg-white p-10 w-[560px] lg:w-[450px] rounded-xl lg:h-[450px] mt-12 shadow-xl"
    >
      <p className="text-secondary text-4xl">{icon}</p>
      <h1 className=" font-bold text-3xl sm:text-2xl my-3">{name}</h1>
      <p className="sm:leading-7 text-textColor text-2xl sm:text-base">
        {content}
      </p>
      <Link
        href="/projects"
        className="text-secondary text-2xl lg:text-base flex flex-row items-center mt-5"
      >
        Explore projects
        <span>
          <FaAngleRight />
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
