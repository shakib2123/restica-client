import Swal from "sweetalert2";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const FoodUpdate = () => {
  const { user } = useAuth();
  const loadedFood = useLoaderData();
  const axios = useAxios();
  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const origin = form.origin.value;
    const video = form.video.value;
    const description = form.description.value;

    const updatedFood = {
      name,
      image,
      category,
      quantity,
      price,
      origin,
      video,
      description,
    };

    axios.patch(`/updateFood/${loadedFood?._id}`, updatedFood).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        form.reset();
        Swal.fire("Food updated!", "Successfully!", "success");
      }
    });
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-3 py-8 md:py-16">
        <h2 className="text-center text-4xl lg:text-5xl font-medium my-8 text-pink-700">
          Update your product !!!
        </h2>
        <form onSubmit={handleUpdateFood}>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {/*  row  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={loadedFood.name}
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
                defaultValue={loadedFood?.image}
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
                defaultValue={loadedFood?.category}
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
                defaultValue={loadedFood?.quantity}
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
                defaultValue={loadedFood?.price}
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
                defaultValue={loadedFood?.origin}
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
              defaultValue={loadedFood?.video}
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
              defaultValue={loadedFood?.description}
              className="textarea textarea-bordered rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-block bg-pink-600 hover:bg-pink-700 rounded-lg font-bold mt-8 hover:scale-105 border-0 text-white"
          >
            Update Food
          </button>
        </form>
          </div>
          <Footer/>
    </div>
  );
};

export default FoodUpdate;
