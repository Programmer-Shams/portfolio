"use client";
import { NavLinks, SocialLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBaseProps } from "react-icons";
import MobileNav from "./MobileNav";

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="w-full items-center flex flex-row mx-32">
      <Link href="/" className="w-[30%] font-extrabold text-[20px] text-white">Shams</Link>
      <div className="gap-[13rem] flex flex-row w-[60%]">
      <div className="flex gap-7">
        {NavLinks.map((link) => {
          const isActive = pathname === link.id
          return (
            <Link href={`#${link.id}`} key={link.name} className="app__flex p-text">
              {link.name}
            </Link>
          )
        } 
        )}
      </div>
      <div className="flex gap-5">
        {SocialLinks.map((link, i) => {
          return (
            <Link href={link.path} key={i} className="text-secondary text-[18px]">
              {link.icon({} as IconBaseProps)}
            </Link>
          );
        })}
      </div>
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;