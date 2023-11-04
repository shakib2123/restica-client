import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co/XJPzC7g/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai-1.jpg)",
      }}
      className="bg-cover bg-no-repeat bg-center "
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
