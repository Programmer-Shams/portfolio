import React, { useState } from "react";
import "./Navbar.scss";
import { NavLinks } from "../../constants";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 style={{ color: "var(--secondary-color)" }}>Shams</h1>
      </div>
      <ul className="app__navbar-links">
        {NavLinks.map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div></div>
            <a href={`#${item}`}>{item.name}</a>
          </li> 
        ))}
      </ul>

      <div className="app__navbar-menu ">
        <HiOutlineMenuAlt3 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={{ item }}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
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
