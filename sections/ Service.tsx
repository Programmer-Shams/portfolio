import ServiceCard from "@/components/ServiceCard";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdDeveloperBoard } from "react-icons/md";
import { ServicesInfo } from "@/constants";
import { IconBaseProps } from "react-icons";
import Info from "@/components/Info";

const Service = () => {
  return (
    <section className="bg-bg_secondary w-[630px] lg:w-full lg:h-[120vh] h-[290vh] pt-10" id="service">
      <div className="lg:flex justify-center items-center"><Info /></div>
      <div className="mt-14">
        <h1 className="text-3xl text-center font-[600]">Awesome Service</h1>
        <p className="text-textColor mt-5 text-center text-xl px-3">
          Obviously I'm a Front-End Developer. Experienced with all stages of
          the development cycle for dynamic web projects.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-5">
        {ServicesInfo.map((service) => (
          <ServiceCard
            key={service.name}
            name={service.name}
            icon={service.icon({} as IconBaseProps)}
            content={service.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
