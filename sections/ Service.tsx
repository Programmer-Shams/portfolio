import ServiceCard from "@/components/ServiceCard";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdDeveloperBoard } from "react-icons/md";
import { ServicesInfo } from "@/constants";
import { IconBaseProps } from "react-icons";
import Info from "@/components/Info";

const Service = () => {
  return (
    <section className="bg-bg_secondary w-full h-[120vh] pt-10" id="service">
      <Info />
      <div className="mt-14">
        <h1 className="text-3xl text-center font-[600]">Awesome Service</h1>
        <p className="text-textColor mt-5 text-center">
          Obviously I'm a Front-End Developer. Experienced with all stages of
          the development <br /> cycle for dynamic web projects.
        </p>
      </div>
      <div className="flex flex-row gap-5 m-5 mt-10 justify-center">
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
