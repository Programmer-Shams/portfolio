import { SocialLinksFooter } from "@/constants";
import Link from "next/link";
import { IconBaseProps } from "react-icons";

const Footer = () => {
  return (
    <footer className="sm:w-full lg:h-[50vh] w-[630px] h-[70vh] bg-bg_secondary relative">
      <h1 className="text-3xl text-center font-[600] pt-10">Shams</h1>
      <p className="text-black mt-16 text-base text-center leading-[30px] px-4 lg:px-0">
        Have a project in mind that requires technical expertise? <br/>
        Obviously I'm a Software Developer, Experienced with all stages of the
        development cycle for <br /> dynamic web projects.
      </p>
      <div className="flex gap-3 text-center justify-center mt-6">
        {SocialLinksFooter.map((link, i) => {
          return (
            <div className=" text-black rounded-full p-2 border border-black hover:bg-secondary hover:text-white hover:border-secondary">
              <Link
                href={link.path}
                key={i}
                className="text-[15px] hover:text-white"
              >
                {link.icon({} as IconBaseProps)}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-[#161C2D] text-white w-full  absolute bottom-0">
        <p className="text-center py-8 items-center justify-center">© 2024 Shamsdeen ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;