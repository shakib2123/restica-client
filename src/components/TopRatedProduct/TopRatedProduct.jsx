import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
const TopRatedProduct = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "1000%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div>
      <div
        ref={ref}
        style={{ background: "linear-gradient(180deg, #111132, #0c0c1d)" }}
        className="h-screen relative flex justify-center items-center overflow-hidden my-16 text-center"
      >
        <motion.h1
          style={{ y: yText }}
          className="text-3xl lg:text-5xl font-medium  z-10 text-pink-200"
        >
          🎉Explore Our Customer Favorites🎉
        </motion.h1>
        <motion.div
          style={{
            backgroundImage: "url(https://i.ibb.co/3YRcffc/mountains.png)",
          }}
          className="bg-cover bg-bottom w-full h-full absolute z-30"
        ></motion.div>
        <motion.div
          className="bg-cover bg-bottom w-full h-full absolute z-20"
          style={{
            y: yBg,
            backgroundImage: "url(https://i.ibb.co/FXTYPHF/planets.png)",
          }}
        ></motion.div>
        <motion.div
          style={{
            x: yBg,
            backgroundImage: "url(https://i.ibb.co/7Qb4BnL/stars.png)",
          }}
          className="bg-cover bg-bottom w-full h-full absolute z-10"
        ></motion.div>
          </div>
          <div className="max-w-7xl mx-auto my-8">
              
          </div>
    </div>
  );
};

export default TopRatedProduct;
