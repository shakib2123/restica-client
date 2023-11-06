import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const OrderPage = () => {
  const { id } = useParams();
  const axios = useAxios();
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
  return (
    <div>
      <Navbar />
      <form className="max-w-7xl mx-auto my-10 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Food Name"
              className="input input-bordered rounded-lg"
              required
            />
          </div>
          {/* row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="$Price"
              className="input input-bordered rounded-lg"
              required
            />
          </div>
          {/* row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered rounded-lg"
              required
            />
          </div>
          {/* row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Buyer Name</span>
            </label>
            <input
              type="text"
              name="buyer"
              placeholder="Buyer Name"
              className="input input-bordered rounded-lg"
              required
            />
          </div>
          {/* row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Buyer Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Buyer Name"
              className="input input-bordered rounded-lg"
              required
            />
          </div>
          {/* row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Buying Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Buying Date"
              className="input input-bordered rounded-lg"
              required
            />
          </div>
        </div>
        <button className="btn btn-block bg-pink-500 hover:bg-pink-600 rounded-lg text-white hover:scale-105">
          Order Now
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default OrderPage;
