import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const TopFood = ({ topFood }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 300,
    });
  }, []);
  return (
    <div>
      <div data-aos="zoom-in-up" className="card glass">
        <figure data-aos="zoom-in-in">
          <img
            data-aos="zoom-in-in"
            src={topFood?.image}
            alt="food"
            className="h-64 w-full"
          />
        </figure>
        <div className="card-body">
          <h2
            data-aos="zoom-in-in"
            className="card-title text-pink-600 text-xl"
          >
            {topFood?.name}
          </h2>
          <h3 data-aos="zoom-in-in" className="text-lg font-bold text-pink-900">
            ${topFood?.price}
          </h3>
          <p
            data-aos="zoom-in-in"
            className="text-lg text-gray-600 font-medium"
          >
            {topFood?.category}
          </p>
          <div data-aos="zoom-in-in" className="card-actions justify-end">
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
