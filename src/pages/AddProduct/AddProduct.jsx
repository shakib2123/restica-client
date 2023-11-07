import Swal from "sweetalert2";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

const AddProduct = () => {
  const { user } = useAuth();
  console.log(user);
  const axios = useAxios();
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.foodName.value;
    const image = form.image.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const origin = form.origin.value;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const video = form.video.value;
    const description = form.description.value;

    const food = {
      name,
      image,
      category,
      quantity,
      price,
      origin,
      video,
      description,
      user: userName,
      email: userEmail,
      purchase_count: 0,
    };

    axios.post("/foods", food).then((res) => {
      console.log(res.data);
      if (res.data.acknowledged) {
        form.reset();
        Swal.fire("Food added!", "Successfully!", "success");
      }
    });
  };

  return (
    <div>
      <Navbar />
      <Helmet>
        <title>RESTICA - Add Food</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-3 py-8 md:py-16">
        <h2 className="text-center text-4xl lg:text-5xl font-medium my-8 text-pink-700">
          Add your food !!!
        </h2>
        <form onSubmit={handleAddFood}>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {/*  row  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                placeholder="Food Name"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            {/*  row  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Food Image"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            {/*  row  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Food Category"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            {/*  row  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="quantity"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            {/*  row  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            {/*  row  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Origin (Country)</span>
              </label>
              <input
                type="text"
                name="origin"
                placeholder="Food Origin (Country)"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            {/*  row  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add By (name)</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add By (email)</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered rounded-lg"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Video</span>
            </label>
            <input
              type="text"
              name="video"
              placeholder="Video"
              className="input input-bordered rounded-lg"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-block bg-pink-600 hover:bg-pink-700 rounded-lg font-bold mt-8 hover:scale-105 border-0 text-white"
          >
            Add Food
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
