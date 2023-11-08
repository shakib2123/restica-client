import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import auth from "../../firebase/firebase.config";
import Navbar from "../../components/Navbar/Navbar";
import errorAnime from "../../assets/ErrorAnime.json";
import { PulseLoader } from "react-spinners";
import Lottie from "lottie-react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const MyAddedFood = () => {useEffect(() => {
  AOS.init({
    duration: 1000,
    delay: 300,
  });
}, []);
  const axios = useAxios();
  const {
    data: myAddedFoods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myAddedFoods"],
    queryFn: async () => {
      const email = auth.currentUser.email;
      const res = await axios.get(`/foods?email=${email}`);
      const data = res.data;
      return data;
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
      <Helmet>
        <title>RESTICA - My Added Food</title>
      </Helmet>
      <div>
        {isLoading ? (
          <div className=" w-full flex justify-center items-center">
            <PulseLoader size={30} color="#ff00d6" />
          </div>
        ) : (
          <div
            data-aos="zoom-in-up"
            className="max-w-7xl mx-auto grid grid-cols-1 px-2 lg:grid-cols-2 gap-4 md:gap-8  my-8 md:my-16"
          >
            {myAddedFoods?.result?.map((myAddedFood) => (
              <div
                data-aos="zoom-in-up"
                key={myAddedFood._id}
                className="card card-side bg-base-100 shadow-xl"
              >
                <figure className="w-44 md:w-64">
                  <img
                    data-aos="zoom-in-up"
                    className="w-full h-full"
                    src={myAddedFood?.image}
                    alt="img"
                  />
                </figure>
                <div data-aos="zoom-in-up" className="card-body">
                  <h2
                    data-aos="zoom-in-up"
                    className="card-title text-pink-600"
                  >
                    {myAddedFood?.name}
                  </h2>
                  <p
                    data-aos="zoom-in-up"
                    className="text-lg text-primary font-medium"
                  >
                    ${myAddedFood?.price}
                  </p>
                  <h3
                    data-aos="zoom-in-up"
                    className=" text-lg font-bold text-pink-950 bg-pink-300 w-fit p-1 rounded-lg"
                  >
                    {myAddedFood?.category}
                  </h3>

                  <p
                    data-aos="zoom-in-up"
                    className="text-gray-700 font-semibold"
                  ></p>
                  <div className="card-actions justify-end">
                    <Link to={`/foodUpdate/${myAddedFood._id}`}>
                      <button
                        data-aos="zoom-in-up"
                        title="delete"
                        className="text-pink-600 hover:text-pink-500 hover:scale-105 btn rounded-lg"
                      >
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyAddedFood;
