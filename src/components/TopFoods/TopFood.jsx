import { Link } from "react-router-dom";

const TopFood = ({ topFood }) => {
  return (
    <div>
      <div className="card glass">
        <figure>
          <img src={topFood.image} alt="food" className="h-64 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-pink-600 text-xl">{topFood?.name}</h2>
          <h3 className="text-lg font-bold text-pink-900">${topFood?.price}</h3>
          <p className="text-lg text-gray-600 font-medium">
            {topFood?.category}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/singleFoodPage/${topFood?._id}`}>
              <button className="btn btn-primary rounded-lg text-white">
                SHOW DETAILS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFood;
