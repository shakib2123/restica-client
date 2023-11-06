import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useAuth from "../../hooks/useAuth";

const OrderPage = () => {
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
  } = loadedFood;
  
  const { user } = useAuth();
  console.log(user);
  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.name.value;
    const price = form.price.value;
    const buyer = form.buyer.value;
    const email = form.email.value;
    const date = form.date.value;

    const order = {
      foodName,
      price,
      buyer,
      email,
      date,
      image,
      serviceId: _id,
      category,
      madeBy,
    };
    console.log(order);
  };

  return (
    <div>
      <Navbar />
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
              defaultValue={user?.email}
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
              className="input input-bordered rounded-lg"
              required
            />
          </div>
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
