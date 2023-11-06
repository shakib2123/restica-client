import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../../components/Navbar/Navbar";
import { PulseLoader } from "react-spinners";
import Lottie from "lottie-react";
import errorAnime from "../../assets/ErrorAnime.json";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
const SingleFoodPage = () => {
  const axios = useAxios();
  const { id } = useParams();
  const {
    data: food,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["singleFood"],
    queryFn: async () => {
      const res = await axios.get(`/foods/${id}`);
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

  console.log(food);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="px-2">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 bg-gray-200 rounded-2xl border-2 border-pink-700 my-8 p-3 md:p-8">
          <div className="bg-gray-300 rounded-xl">
            <div className="card card-compact">
              <figure>
                <img src={food.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl text-pink-700">
                  {food?.name}
                </h2>
                <h3 className="text-xl font-medium">${food?.price}</h3>
                <h3 className="text-lg font-semibold p-1 bg-pink-300 w-fit rounded-lg text-pink-700 flex items-center gap-2">
                  <span className="text-pink-900 text-2xl">
                    <BiSolidUser />
                  </span>{" "}
                  {food?.user}
                </h3>
                <h3 className="text-xl font-medium flex items-center gap-2">
                  <span className="text-2xl">
                    <AiOutlineGlobal />
                  </span>
                  {food?.origin}
                </h3>
                <p className="text-lg">{food?.description}</p>
                <div className="card-actions mt-3">
                  <button className="btn btn-primary btn-block rounded-lg text-white hover:scale-105 shadow-lg shadow-primary">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {food.video ? (
              <div
                className="h-[200px] w3-[400px] lg:h-[450px] lg:w-[600px]"
                dangerouslySetInnerHTML={{ __html: food.video }}
              />
            ) : (
              <p className="text-lg text-white">video not found...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodPage;
