import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const OrderPage = () => {
  const axios = useAxios();
  const loadedFood = useLoaderData();

  const {
    name,
    quantity,
    price,
    _id,
    image,
    category,
    user: madeBy,
    email,

    purchase_count,
  } = loadedFood;
  const [stock, setStock] = useState(parseInt(quantity));
  const [count, setCount] = useState(parseInt(purchase_count));
  const currentTimestamp = Date.now();

  // Create a Date object using the timestamp
  const currentDate = new Date(currentTimestamp);

  // Get individual components of the date
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Month is zero-based
  const day = currentDate.getDate();

  // Format the date string
  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;

  console.log(formattedDate);
  const { user } = useAuth();
  const handleOrder = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.name.value;
    const price = form.price.value;
    const buyer = form.buyer.value;
    const buyerQuantity = form.quantity.value;
    const email = form.email.value;

    const order = {
      foodName,
      price,
      buyer,
      email,
      date: formattedDate,
      image,
      buyerQuantity,
      serviceId: _id,
      category,
      madeBy,
    };
    const parsedQuantity = parseInt(buyerQuantity);

    if (parsedQuantity <= stock) {
      // Calculate the updated stock and count
      const updatedStock = stock - parsedQuantity;
      const updatedCount = count + parsedQuantity;

      // Update the state
      setStock(updatedStock);
      setCount(updatedCount);
      const update = { updatedStock, updatedCount };

      try {
        const response = await axios.patch(`/foods/${_id}`, update);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      return Swal.fire("Error!", "Too much amount selected!");
    }

    axios.post("/orders", order).then((res) => {
      console.log(res.data);
      if (res.data.acknowledged) {
        Swal.fire("Ordered!", "Successfully!", "success");
      }
    });
  };

  return (
    <div>
      <Navbar />
      <Helmet>
        <title>RESTICA - Order</title>
      </Helmet>
      <form onSubmit={handleOrder} className="max-w-7xl mx-auto my-10 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
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
              defaultValue={"$" + price}
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
              defaultValue={quantity}
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
              defaultValue={user?.displayName}
              className="input input-bordered rounded-lg"
              required
              readOnly={true}
            />
          </div>
        </div>
        {/* row */}
        <div className="form-control mb-8">
          <label className="label">
            <span className="label-text">Buyer Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            className="input input-bordered rounded-lg"
            required
            readOnly={true}
          />
        </div>
        {user?.email === email ? (
          <button className="btn btn-disabled rounded-lg btn-block">
            Your Are The Owner
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-block bg-pink-500 hover:bg-pink-600 rounded-lg text-white hover:scale-105 shadow-lg shadow-pink-500 border-none"
          >
            Order Now
          </button>
        )}
      </form>
      <Footer />
    </div>
  );
};

export default OrderPage;
