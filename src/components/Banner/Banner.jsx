
import Lottie from "lottie-react";
import { IoIosArrowForward } from "react-icons/io";
import { motion} from "framer-motion";
import foodAnime from "../../assets/FoodAnime.json";
import { Link } from "react-router-dom";
const textVariants = {
  initial: {
    y: -400,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Banner = () =>
{


  return (
    <div className="z-0 max-w-7xl mx-auto overflow-hidden">
      <div className="hero w-full min-h-[90vh]">
        <div className="hero-content w-full flex-col-reverse lg:flex-row">
          <div className="text-left">
            <motion.div
              className="max-w-xl space-y-5"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <motion.h2
                variants={textVariants}
                className="text-4xl lg:text-5xl font-bold text-gray-200"
              >
                Savor the Flavors at Restica: Your Culinary Oasis!
              </motion.h2>
              <motion.p variants={textVariants} className="text-white text-lg">
                Discover culinary excellence at Restica: your destination for
                delectable delights. Indulge in a world of flavors and savor the
                best in town.
              </motion.p>

              <Link to="/allFood">
                <motion.button
                  variants={textVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center text-white cursor-pointer btn bg-pink-600 hover:bg-pink-700 border-0 rounded-lg mt-2"
                >
                  All Menus
                  <motion.span
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ repeat: Infinity, delay: 0.3, duration: 1.5 }}
                  >
                    {" "}
                    <IoIosArrowForward />
                  </motion.span>
                </motion.button>
              </Link>

              <motion.img
                variants={textVariants}
                animate="scrollButton"
                src="https://i.ibb.co/4VThzj5/scroll.png"
                alt=""
              />
            </motion.div>
          </div>
          <div className="card z-0 flex-shrink-0 w-full max-w-sm">
            <div className="flex-1 z-0">
              <Lottie loop={false} animationData={foodAnime}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
