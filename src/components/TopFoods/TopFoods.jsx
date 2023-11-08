import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { PulseLoader } from "react-spinners";
import Lottie from "lottie-react";
import errorAnime from "../../assets/ErrorAnime.json";
import TopFood from "./TopFood";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const TopFoods = () =>
{
   useEffect(() => {
     AOS.init({
       duration: 1000,
       delay: 300,
     });
   }, []);
  const axios = useAxios();

  const {
    data: topFoods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["topFoods"],
    queryFn: async () => {
      const res = await axios.get("/topFoods");
      const food = res.data;
      return food;
    },
  });
  if (isLoading) {
    return (
      <div className="mt-8 w-full flex justify-center items-center">
        <PulseLoader size={30} color="#ff00d6" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex mt-8 overflow-hidden justify-center items-center">
        <Lottie loop={false} animationData={errorAnime} />
      </div>
    );
  }
  return (
    <div data-aos="zoom-in-up">
      <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-3">
        {topFoods.map((topFood) => (
          <TopFood key={topFood._id} topFood={topFood}></TopFood>
        ))}
      </div>
      <div className="flex justify-center items-center my-7">
        <Link to="/allFood">
          <button
            data-aos="zoom-in-up"
            className="btn text-white bg-pink-600 hover:bg-pink-500 rounded-lg"
          >
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
