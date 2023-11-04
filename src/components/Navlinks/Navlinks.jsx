import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidMessageEdit } from "react-icons/bi";
const Navlinks = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-5">
      <li title="Home">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-pink-600 shadow-lg shadow-pink-500 hover:shadow-xl hover:bg-pink-600 hover:shadow-pink-600 text-2xl font-medium text-white hover:text-gray-200 hover:scale-105  rounded-lg"
              : "text-2xl font-medium rounded-lg hover:scale-105"
          }
        >
          <FaHome />
        </NavLink>
      </li>
      <li title="All Food">
        <NavLink
          to="/allFood"
          className={({ isActive }) =>
            isActive
              ? "bg-pink-600 shadow-lg shadow-pink-500 hover:shadow-xl hover:bg-pink-600 hover:shadow-pink-600 text-2xl font-medium text-white hover:text-gray-200 hover:scale-105  rounded-lg"
              : "text-2xl font-medium rounded-lg hover:scale-105"
          }
        >
          <FaCartShopping />
        </NavLink>
      </li>
      <li title="blog">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "bg-pink-600 shadow-lg shadow-pink-500 hover:shadow-xl hover:bg-pink-600 hover:shadow-pink-600 text-2xl font-medium text-white hover:text-gray-200 hover:scale-105  rounded-lg"
              : "text-2xl font-medium rounded-lg hover:scale-105"
          }
        >
          <BiSolidMessageEdit/>
        </NavLink>
      </li>
    </div>
  );
};

export default Navlinks;
