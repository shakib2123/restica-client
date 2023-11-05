import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import loginAnime from "../../assets/LoginAnime.json";
const Login = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co/XJPzC7g/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai-1.jpg)",
      }}
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="flex lg:items-end flex-col-reverse lg:flex-row my-8 px-2">
        <div className="border bg-pink-800 rounded-2xl">
          <div className="md:w-auto w-[90%] p-8 rounded-xl m-4 flex flex-col items-center  border border-gray-400 opacity-90 bg-pink-600 shadow-xl shadow-pink-600">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-3xl text-gray-200 m-2">
                Log In
              </h1>
            </div>
            <form>
              <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                <div className="">
                  <div className="m-1 text-lg text-gray-200 text-semibold">
                    Username
                  </div>
                  <input
                    type="text"
                    className="border-b border-gray-200 focus:outline-none text-gray-200 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                  />
                </div>
                <div className="">
                  <div className="m-1 text-lg text-gray-200 text-semibold">
                    Password
                  </div>
                  <input
                    type="password"
                    className="border-b border-gray-200 focus:outline-none text-gray-200 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                  />
                </div>
              </div>
              <div className="text-center mt-7">
                <button
                  type="submit"
                  className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-t from-stone-800 via-pink-900 to-pink-600 font-medium shadow-lg hover:scale-105 hover:shadow-pink-600"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex gap-10 mt-4">
              <button className="w-full hover:scale-105 shadow-xl hover:shadow-pink-500 h-10 flex items-center gap-2 border-2 border-gray-300 p-2 rounded-lg">
                <img
                  className="w-full h-full rounded-xl"
                  src="https://i.ibb.co/L584bZ6/download.png"
                  alt=""
                />
                <h2 className="text-white font-bold text-2xl">Google</h2>
              </button>
              <button className="w-full hover:scale-105 shadow-xl hover:shadow-pink-500 h-10 flex items-center gap-2 border-2 border-gray-300 p-2 rounded-lg">
                <img
                  className="w-full h-full rounded-xl"
                  src="https://i.ibb.co/YtYFBPH/download.png"
                  alt=""
                />
                <h2 className="text-white font-bold text-2xl">Github</h2>
              </button>
            </div>
          </div>
          <div className="text-center my-6 flex flex-col">
            <a className="text-sm font-medium text-gray-400 hover:text-violet-500 m-1">
              Forgot Password ?
            </a>
            <Link
              to="/register"
              className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1"
            >
              Not a User? Create New Account
            </Link>
          </div>
        </div>
        <div>
          <Lottie animationData={loginAnime} />
        </div>
      </div>
    </div>
  );
};

export default Login;
