import Home from "../pages/Home/Home";
import { motion, useScroll } from "framer-motion";
const Main = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        className="sticky z-10 top-0 left-0 right-0 bg-gradient-to-r from-yellow-500 to-pink-500 h-1"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      ></motion.div>
      <Home />
    </div>
  );
};

export default Main;
