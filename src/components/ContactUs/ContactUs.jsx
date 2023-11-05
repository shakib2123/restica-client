import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 300,
    });
  }, []);
  return (
    <div className="flex justify-center my-16 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center max-w-7xl mt-5">
        <div className="flex flex-col px-7 py-2 bg-slate-200 w-full rounded-tl-3xl">
          <div className="text-lg font-semibold">
            <h1 data-aos="zoom-in-up">Send a message</h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div>
              <input
                data-aos="zoom-in-up"
                type="text"
                name=""
                id=""
                placeholder="Enter first name"
                className="w-full border-2 border-white px-3 py-1 text-sm outline-none placeholder-text-black placeholder-opacity-40 mt-4 mr-2 focus:border-pink-500 duration-200 ease-in-out rounded-lg"
              />
            </div>
            <div>
              <input
                data-aos="zoom-in-up"
                type="text"
                name=""
                id=""
                placeholder="Enter last name"
                className="w-full md:w-95 border-2 border-white px-3 py-1 text-sm outline-none placeholder-text-black placeholder-opacity-40 mt-4 md:ml-2 focus:border-pink-500 duration-200 ease-in-out rounded-lg"
              />
            </div>
          </div>
          <input
            data-aos="zoom-in-up"
            type="email"
            name=""
            id=""
            placeholder="Enter email address"
            className="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder-text-black placeholder-opacity-40 mt-4 focus:border-pink-500 duration-200 ease-in-out rounded-lg"
          />
          <input
            data-aos="zoom-in-up"
            type="tel"
            name=""
            id=""
            placeholder="Phone Number"
            className="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder-text-black placeholder-opacity-40 mt-4 focus-border-pink-500 duration-200 ease-in-out rounded-lg"
          />
          <input
            data-aos="zoom-in-up"
            type="text"
            name=""
            id=""
            placeholder="Subject"
            className="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder-text-black placeholder-opacity-40 mt-4 focus-border-pink-500 duration-200 ease-in-out rounded-lg"
          />
          <textarea
            data-aos="zoom-in-up"
            id="message"
            name="message"
            placeholder="Write us a message"
            className="mb-3 w-full border-2 border-white h-44 text-sm outline-none placeholder-text-black placeholder-opacity-40 focus-border-pink-500 py-1 px-3 mt-4 resize-none leading-6 duration-200 ease-in-out rounded-lg"
          ></textarea>
          <button
            data-aos="zoom-in-up"
            className="bg-pink-900 hover:bg-pink-600 px-4 font-semibold text-white w-1/2 text-center mx-auto my-3 rounded-tr-lg rounded-bl-lg"
          >
            Submit
          </button>
        </div>
        <div className="flex flex-col bg-pink-900 text-white md:w-65 rounded-br-3xl">
          <h1 data-aos="zoom-in-left" className="font-semibold px-5 my-5">
            Contact info
          </h1>
          <div data-aos="zoom-in-left" className="flex px-5 space-x-2">
            <ion-icon
              name="call-sharp"
              className="text-orange-500 mt-1 my-3"
            ></ion-icon>
            <span className="text-sm">+1 900 267 2678</span>
          </div>
          <div data-aos="zoom-in-left" className="flex px-5 space-x-2">
            <ion-icon
              name="mail"
              className="text-orange-500 mt-1 my-3"
            ></ion-icon>
            <span className="text-sm">restica@gmail.com</span>
          </div>
          <div data-aos="zoom-in-left" className="flex px-5 space-x-2">
            <ion-icon
              name="globe-outline"
              className="text-orange-500 mt-1 my-3"
            ></ion-icon>
            <span className="text-sm">www.restica.org</span>
          </div>
          <div className="px-5 space-x-5 mt-7 mx-auto mb-5">
            <a>
              <i data-aos="zoom-in-left" className="fa-brands fa-facebook-f text-white text-2xl"></i>
            </a>
            <a>
              <i data-aos="zoom-in-left" className="fa-brands fa-instagram text-red-500 text-2xl"></i>
            </a>
            <a>
              <i  data-aos="zoom-in-left" className="fa-brands fa-linkedin text-yellow-500 text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
