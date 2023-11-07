import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnime from "../../assets/LoginAnime.json";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

import useAxios from "../../hooks/useAxios";
import { Helmet } from "react-helmet";
const Register = () => {
  const { createUser, profileUpdate, googleLogin, githubLogin } = useAuth();
  const axios = useAxios();
  const location = useLocation();
  const navigate = useNavigate();
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, photo, email, password };
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\]).{8,}$/.test(
        password
      )
    ) {
      return toast.error(
        "Password should be at least 6 latter, digit and special character."
      );
    }
    createUser(email, password)
      .then((result) => {
        profileUpdate(name, photo)
          .then((result) => console.log(result))
          .catch((err) => toast.error(err.message));
        e.target.reset();
        axios
          .post("/users", user)
          .then((res) => console.log(res.data));
        Swal.fire("Success!!", "Sign up successfully!", "success");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire("Error!!", error.message, "error");
      });
  };
  const socialLogin = (media) => {
    media()
      .then((res) => {
        navigate("/");
        Swal.fire("Success!!", "Sign up successfully!", "success");
      })
      .catch((err) => {
        Swal.fire("Error!!", err.message, "error");
      });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co/XJPzC7g/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai-1.jpg)",
      }}
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
    >
      <Helmet>
        <title>RESTICA - Register</title>
      </Helmet>
      <div className="flex lg:items-end flex-col-reverse lg:flex-row px-2 my-8">
        <div className="border bg-pink-800 rounded-2xl">
          <div className="md:w-auto w-[90%] p-8 rounded-xl m-4 flex flex-col items-center  border border-gray-400 opacity-90 bg-pink-600 shadow-xl shadow-pink-600">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-3xl text-gray-200 m-2">
                Register
              </h1>
            </div>
            <form onSubmit={handleCreateUser}>
              <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                <div className="">
                  <div className="m-1 text-lg text-gray-200 text-semibold">
                    Username
                  </div>
                  <input
                    type="text"
                    name="name"
                    className="border-b border-gray-200 focus:outline-none text-gray-200 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                  />
                </div>
                <div className="">
                  <div className="m-1 text-lg text-gray-200 text-semibold">
                    Photo URL
                  </div>
                  <input
                    type="text"
                    name="photo"
                    className="border-b border-gray-200 focus:outline-none text-gray-200 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                  />
                </div>
                <div className="">
                  <div className="m-1 text-lg text-gray-200 text-semibold">
                    Email
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="border-b border-gray-200 focus:outline-none text-gray-200 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                  />
                </div>
                <div className="">
                  <div className="m-1 text-lg text-gray-200 text-semibold">
                    Password
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="border-b border-gray-200 focus:outline-none text-gray-200 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                  />
                </div>
              </div>
              <div className="text-center mt-7">
                <button
                  type="submit"
                  className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-t from-stone-800 via-pink-900 to-pink-600 font-medium shadow-lg hover:scale-105 hover:shadow-pink-600"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="flex gap-10 mt-4">
              <button
                onClick={() => socialLogin(googleLogin)}
                className="w-full hover:scale-105 shadow-xl hover:shadow-pink-500 h-10 flex items-center gap-2 border-2 border-gray-300 p-2 rounded-lg"
              >
                <img
                  className="w-full h-full rounded-xl"
                  src="https://i.ibb.co/L584bZ6/download.png"
                  alt=""
                />
                <h2 className="text-white font-bold text-2xl">Google</h2>
              </button>
              <button
                onClick={() => socialLogin(githubLogin)}
                className="w-full hover:scale-105 shadow-xl hover:shadow-pink-500 h-10 flex items-center gap-2 border-2 border-gray-300 p-2 rounded-lg"
              >
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
              to="/login"
              className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1"
            >
              Already Have An Account? Login
            </Link>
          </div>
        </div>
        <div>
          <Lottie animationData={loginAnime} />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
