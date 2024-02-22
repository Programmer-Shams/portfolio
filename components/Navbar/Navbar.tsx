import React, { useState } from "react";
import "./Navbar.scss";
import { NavLinks, SocialLinks } from "../../constants";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IconBaseProps } from "react-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="app__navbar bg-bg_secondary">
      <div className="app__navbar-logo">
        <h1 className=" text-secondary text-3xl lg:text-xl font-bold">Shams</h1>
      </div>
      <ul className="app__navbar-links">
        {NavLinks.map((item) => {
          const isActive = pathname === item.link;
          return (
            <li key={`link-${item}`} className={`app__flex text-[0.8rem]`}>
            <div></div>
            <a href={`#${item.link}`}>{item.name}</a>
          </li>
          )
        })}
      </ul>
      <div className="flex gap-5">
        {SocialLinks.map((link, i) => {
          return (
            <Link href={link.path} key={i} className="text-secondary text-[18px]">
              {link.icon({} as IconBaseProps)}
            </Link>
          );
        })}
      </div>

      <div className="app__navbar-menu bg-secondary text-white">
        <HiOutlineMenuAlt3 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="bg-bg_secondary"
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {NavLinks.map((item, i) => (
                <li key={i}>
                  <a href={`#${item.link}`} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
