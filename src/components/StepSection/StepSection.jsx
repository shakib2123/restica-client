import Lottie from "lottie-react";
import deliveryAnime from "../../assets/FoodDeliveryAnime.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const StepSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-14 overflow-hidden bg-pink-200 rounded-3xl">
      <h2 data-aos="zoom-in-up" className="text-4xl lg:text-5xl text-center">
        Our Order <span className="text-pink-600 font-medium">Delivery</span>{" "}
        Process
      </h2>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 lg:py-16 mx-auto flex flex-wrap">
          <div className="flex flex-col-reverse  md:flex-row flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 py-3 md:py-6">
              <div data-aos="zoom-out-right" className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Order Confirmation:
                  </h2>
                  <p className="leading-relaxed">
                    After the customer places an order, provide a clear
                    confirmation message. Include an order summary with the
                    product details and estimated delivery date. Offer an order
                    tracking option or a unique order reference number for
                    future inquiries.
                  </p>
                </div>
              </div>
              <div data-aos="zoom-out-right" className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Order Processing:
                  </h2>
                  <p className="leading-relaxed">
                    Inform the customer that their order is being processed.
                    Provide updates on the order status, including when it's
                    packed and prepared for shipping. Ensure that the customer
                    can easily reach out to your support team if they have any
                    questions or concerns.
                  </p>
                </div>
              </div>
              <div data-aos="zoom-out-right" className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Shipping and Tracking:
                  </h2>
                  <p className="leading-relaxed">
                    Notify the customer when the order has been handed over to
                    the shipping carrier. Include a tracking link or code that
                    allows customers to monitor the delivery progress in
                    real-time. Offer estimated delivery timeframes and
                    information about any delays.
                  </p>
                </div>
              </div>
              <div data-aos="zoom-out-right" className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Out for Delivery:
                  </h2>
                  <p className="leading-relaxed">
                    When the order is out for delivery, provide a notification
                    with an expected delivery time window. Offer options for
                    rescheduling the delivery or providing special delivery
                    instructions. Include a contact point for the delivery
                    person or support in case of delivery-related issues.
                  </p>
                </div>
              </div>
              <div data-aos="zoom-out-right" className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Delivery Confirmation:
                  </h2>
                  <p className="leading-relaxed">
                    Once the order is successfully delivered, send a delivery
                    confirmation message. Ask for feedback on the delivery
                    experience and the quality of the product. Provide contact
                    details for customer support to address any post-delivery
                    inquiries or issues.
                  </p>
                </div>
              </div>
            </div>

            <Lottie
              data-aos="zoom-out"
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              loop={false}
              animationData={deliveryAnime}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepSection;
