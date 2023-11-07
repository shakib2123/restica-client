import { useState } from "react";
import Navlinks from "../Navlinks/Navlinks";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logOut } = useAuth();

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        Swal.fire("Logout", "Successfully!", "success");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div
      className={
        navbar
          ? "sticky top-0 z-50 backdrop-blur-3xl borderb backdrop-brightness-105"
          : "bg-transparent"
      }
    >
      <div className="navbar max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
          layout
          className="navbar-start"
        >
          <div className="dropdown">
            <div className="z-50 drawer lg:hidden">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button">
                  <AiOutlineMenuUnfold className="text-2xl text-pink-400 font-bold" />
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
          </div>
          <img className="w-[80px] md:w-[120px]" src="/logo.png" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layout
          transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
          className="navbar-center hidden lg:flex"
        >
          <ul className="menu menu-horizontal px-1">
            <Navlinks></Navlinks>
          </ul>
        </motion.div>
        <motion.div
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          layout
          transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
          className="navbar-end z-50"
        >
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user.photoURL
                        ? user?.photoURL
                        : "https://i.ibb.co/6HRWPNv/blank-avatar-profile-picture.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="border-b">
                  <p>{user?.displayName}</p>
                </li>

                <li>
                  <NavLink
                    to="/myAddedFoods"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-pink-600 shadow-lg shadow-pink-500 hover:shadow-xl hover:bg-pink-600 hover:shadow-pink-600 text-lg font-medium text-white hover:text-gray-200 hover:scale-105  rounded-lg"
                        : "text-lg text-pink-500 hover:text-pink-600 font-medium rounded-lg hover:scale-105"
                    }
                  >
                    My added food
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addFood"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-pink-600 shadow-lg shadow-pink-500 hover:shadow-xl hover:bg-pink-600 hover:shadow-pink-600 text-lg font-medium text-white hover:text-gray-200 hover:scale-105  rounded-lg"
                        : "text-lg text-pink-500 hover:text-pink-600 font-medium rounded-lg hover:scale-105"
                    }
                  >
                    Add a food
                  </NavLink>
                </li>
                <li className="border-b">
                  <NavLink
                    to="/orderedFood"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-pink-600 shadow-lg shadow-pink-500 hover:shadow-xl hover:bg-pink-600 hover:shadow-pink-600 text-lg font-medium text-white hover:text-gray-200 hover:scale-105  rounded-lg"
                        : "text-lg text-pink-500 hover:text-pink-600 font-medium rounded-lg hover:scale-105"
                    }
                  >
                    My ordered food
                  </NavLink>
                </li>

                <li>
                  <button className="btn btn-warning btn-sm btn-block text-white rounded-lg" onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-pink-600 px-4 py-2 shadow-lg shadow-pink-600 hover:shadow-xl hover:shadow-pink-700 md:text-xl text-white font-medium rounded-lg cursor-pointer flex items-center"
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
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
