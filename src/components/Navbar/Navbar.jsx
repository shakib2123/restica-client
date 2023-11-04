import { useEffect, useState } from "react";
import Navlinks from "../Navlinks/Navlinks";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

import { motion } from "framer-motion";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className={
        navbar
          ? "sticky top-0 z-50 backdrop-blur-3xl backdrop-brightness-105"
          : "bg-transparent"
      }
    >
      <div className="navbar max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
          className="navbar-start"
        >
          <div className="dropdown">
            <div className="z-50 drawer lg:hidden">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button">
                  <AiOutlineMenuUnfold className="text-2xl font-bold" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <Navlinks />
                </ul>
              </div>
            </div>
            {/* <label tabIndex={0} className="btn btn-ghost "></label> */}
          </div>
          <img className="w-[80px] md:w-[120px]" src="/logo.png" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
          className="navbar-center hidden lg:flex"
        >
          <ul className="menu menu-horizontal px-1">
            <Navlinks></Navlinks>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
          className="navbar-end"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-pink-600 px-4 py-1 md:text-xl text-white font-medium rounded-lg cursor-pointer flex items-center"
          >
            Login
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ repeat: Infinity, delay: 0.3, duration: 1.5 }}
            >
              {" "}
              <BiLogIn />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
