import Navbar from "../../components/Navbar/Navbar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import auth from "../../firebase/firebase.config";
import useAxios from "../../hooks/useAxios";
import { FaDeleteLeft } from "react-icons/fa6";

import { PulseLoader } from "react-spinners";
import Lottie from "lottie-react";
import errorAnime from "../../assets/ErrorAnime.json";
import Swal from "sweetalert2";
const MyOrders = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const {
    data: orderedFoods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orderedFood"],
    queryFn: async () => {
      const email = auth.currentUser.email;
      const res = await axios.get(`/orders?email=${email}`);
      const foods = res.data;
      return foods;
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["orderedFood"],
    mutationFn: (id) => {
      return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`/orders-cancel/${id}`)
            .then((res) => console.log(res.data));
        }
      });
    },
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your order has been deleted.",
        icon: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["orderedFood"] });
    },
  });

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
      {isLoading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <PulseLoader size={30} color="#ff00d6" />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 px-2 lg:grid-cols-2 gap-4 md:gap-8  my-8 md:my-16">
          {orderedFoods.map((orderedFood) => (
            <div
              key={orderedFood._id}
              className="card card-side bg-base-100 shadow-xl"
            >
              <figure className="w-44 md:w-64">
                <img
                  className="w-full h-full"
                  src={orderedFood.image}
                  alt="img"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-pink-600">
                  {orderedFood.foodName}
                </h2>
                <p className="text-lg text-primary font-medium">
                  ${orderedFood.price}
                </p>
                <h3 className=" text-lg font-bold text-pink-950 bg-pink-300 w-fit p-1 rounded-lg">
                  {orderedFood.madeBy}
                </h3>
                <p className="text-gray-700 font-semibold">
                  {orderedFood.date}
                </p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => mutate(orderedFood._id)}
                    title="delete"
                    className="text-pink-600 hover:text-pink-500 hover:scale-105 text-4xl"
                  >
                    <FaDeleteLeft />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
