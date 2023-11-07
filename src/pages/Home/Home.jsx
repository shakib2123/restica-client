import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import StepSection from "../../components/StepSection/StepSection";
import TopFoods from "../../components/TopFoods/TopFoods";
import TopRatedProduct from "../../components/TopRatedProduct/TopRatedProduct";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RESTICA - Home</title>
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/XJPzC7g/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai-1.jpg)",
        }}
        className="bg-cover bg-no-repeat bg-center "
      >
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <div>
        <TopRatedProduct />
        <TopFoods />
        <StepSection />
        <ContactUs />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
