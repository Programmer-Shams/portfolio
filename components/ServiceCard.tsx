import Link from "next/link";
import React from "react";
import { IconBaseProps } from "react-icons";
import { FaAngleRight } from "react-icons/fa";

type ServiceCardProps = {
  name: string;
  icon: IconBaseProps;
  content: string;
};

const ServiceCard = ({ name, icon, content }: ServiceCardProps) => {
  return (
    <div className="bg-white p-10 w-[560px] lg:w-[450px] rounded-xl lg:h-[450px] mt-12 shadow-xl">
        <p className="text-secondary text-4xl">{icon}</p>
        <h1 className=" font-bold text-3xl lg:text-2xl my-5">{name}</h1>
        <p className="lg:leading-7 leading-10 text-textColor text-3xl lg:text-base">{content}</p>
        <Link href='/projects' className="text-secondary text-2xl lg:text-base flex flex-row items-center mt-5">
            Explore projects<span><FaAngleRight /></span>
        </Link>
    </div>
  );
};

export default ServiceCard;
