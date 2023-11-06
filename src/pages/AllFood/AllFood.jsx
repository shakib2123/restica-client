import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Foods from "./Foods";
import { PulseLoader } from "react-spinners";
import Lottie from "lottie-react";
import errorAnime from "../../assets/ErrorAnime.json";
import Navbar from "../../components/Navbar/Navbar";
const AllFood = () => {
  const axios = useAxios();

  const {
    data: foods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allFoods"],
    queryFn: async () => {
      const res = await axios.get("/foods");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <PulseLoader size={30} color="#ff00d6" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex max-h-screen overflow-hidden justify-center items-center">
        <Lottie loop={false} animationData={errorAnime} />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {foods.map((food) => (
          <Foods key={food._id} food={food}></Foods>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
