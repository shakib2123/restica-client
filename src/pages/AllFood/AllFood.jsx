import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Foods from "./Foods";
import { PulseLoader } from "react-spinners";
import Lottie from "lottie-react";
import errorAnime from "../../assets/ErrorAnime.json";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AllFood = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 300,
    });
  }, []);
  const axios = useAxios();
  const [page, setPage] = useState(1);
  const limit = 9;
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const {
    data: foods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allFoods", page, search, sort],
    queryFn: async () => {
      const res = await axios.get(
        `/foods?page=${page}&limit=${limit}&search=${search}&sortField=price&sortOrder=${sort}`
      );
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <div className="h-[90vh] w-full flex justify-center items-center">
        <PulseLoader size={30} color="#ff00d6" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex max-h-screen overflow-hidden justify-center items-center">
        <Lottie loop={false} animationData={errorAnime} />
      </div>
    );
  }
  const totalFoods = foods.foodsCount;
  const pages = Math.ceil(totalFoods / limit);
  const pageOfNum = [...Array(pages).fill(0)];
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const searches = e.target.searches.value;
    setSearch(searches);
  };

  const handleSortChange = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    setSort(selectedValue);
  };

  return (
    <div>
      <Navbar />
      <Helmet>
        <title>RESTICA - All Foods</title>
      </Helmet>
      <div
        data-aos="zoom-out"
        className="bg-pink-400 mb-8 shadow-lg shadow-pink-500"
      >
        <div className="navbar max-w-7xl mx-auto">
          <div className="flex-1 mr-1">
            <select
              data-aos="zoom-out"
              value={sort}
              onChange={handleSortChange}
              className="select w-full rounded-lg max-w-xs"
            >
              <option value="" disabled>
                Sort by view
              </option>
              <option value="">Default</option>
              <option value="desc">High to low</option>
              <option value="asc">Low to high</option>
            </select>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <form
                data-aos="zoom-out"
                onSubmit={handleSearch}
                className="join"
              >
                <input
                  type="text"
                  name="searches"
                  className="input input-bordered rounded-lg join-item"
                  placeholder="Search here.."
                />
                <button type="submit" className="btn join-item rounded-r-lg">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <PulseLoader size={30} color="#ff00d6" />
        </div>
      ) : (
        <div
          data-aos="zoom-in-down"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-2"
        >
          {foods?.result.map((food) => (
            <Foods key={food._id} food={food}></Foods>
          ))}
        </div>
      )}
      <div data-aos="zoom-in-down" className="flex justify-center my-8">
        <div className="join rounded-lg">
          <button onClick={handlePrev} className="join-item btn">
            «
          </button>
          {pageOfNum.map((item, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={
                  page === pageNum
                    ? "join-item btn btn-active"
                    : "join-item btn"
                }
              >
                {pageNum}
              </button>
            );
          })}
          <button onClick={handleNext} className="join-item btn">
            »
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllFood;
