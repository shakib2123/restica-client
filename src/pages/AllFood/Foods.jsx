import { Link } from "react-router-dom";

const Foods = ({ food }) => {
  const { _id, name, image, category, quantity, price } = food;
  return (
    <div className="w-auto h-auto border-[3px] shadow-xl rounded-xl hover:transform hover:scale-105 duration-500 ease-in-out hover:shadow-2xl hover:border-pink-400">
      <div className="border border-pink-200 bg-white rounded-md shadow-md relative z-10 divide-y divide-solid divide-pink-300 space-y-9">
        <div>
          <div className="uppercase tracking-wider text-white text-center rounded-md  -ml-[8px] -mr-[8px] mt-5 p-3 border border-pink-400 bg-pink-400 font-bold">
            ${price}
          </div>
          <div className=" mt-8 mb-4 h-72 w-full p-3 rounded-lg">
            <img
              src={image}
              alt=""
              srcSet=""
              className="rounded-lg h-full w-full"
            />
          </div>
          <div className="flex justify-center tracking-wider text-pink-500 text-2xl font-medium">
            {name}
          </div>
        </div>
        <div className=" pl-8">
          <div className="flex-col space-y-2 my-5">
            <h2 className="text-xl font-medium text-gray-600">{category}</h2>
            <p className="text-lg bg-pink-200 text-pink-700 w-fit p-1 rounded-lg">
              In Stock: {quantity}
            </p>
          </div>
        </div>
      </div>
      <Link to={`/`}>
        <div className="uppercase text-gray-500 text-center rounded-b-md w-auto pt-8 pb-[30px] text-sm font-bold -mt-2 relative z-0 hover:text-pink-600 hover:bg-pink-200">
          Show Details
        </div>
      </Link>
    </div>
  );
};

export default Foods;
