const AddProduct = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 py-8 md:py-16">
      <h2 className="text-center text-4xl lg:text-5xl font-medium my-8 text-pink-700">Add your product !!!</h2>
      <form>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/*  row  */}
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
              placeholder="Food Origin (Country)
"
              className="input input-bordered rounded-lg"
              required
            />
          </div>
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
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
