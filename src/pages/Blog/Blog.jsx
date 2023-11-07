import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Helmet>
        <title>RESTICA - Blog</title>
      </Helmet>
      <div className="flex justify-center my-8">
        <div className="flex flex-col max-w-7xl justify-center items-center">
          <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div className="h-full w-full overflow-hidden">
              {" "}
              <img
                src="https://i.ibb.co/FK9MBmV/data-binding.png"
                alt=""
                className="w-full md:w-96 h-full"
              />{" "}
            </div>
            <div className="grid p-2">
              <div className="font-bold text-lg text-black m-2 mt-10">
                What is One way data binding?{" "}
              </div>
              <div className="text-gray-500 m-2 text-sm">
                One way data binding is a technique where the data flows in one
                direction from the source to the target. The source is usually a
                component or a model that contains the data, and the target is
                usually a view or a UI element that displays the data. One way
                data binding allows the view to be updated automatically when
                the data changes in the source, but it does not allow the source
                to be updated from the view. This means that the user cannot
                modify the data by interacting with the view.
              </div>
            </div>
          </div>
          <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div className="h-full w-full overflow-hidden">
              {" "}
              <img
                src="https://i.ibb.co/6nBxdH3/What-is-NPM.jpg"
                alt=""
                className="w-full md:w-96 h-full"
              />{" "}
            </div>
            <div className="grid p-2">
              <div className="font-bold text-lg text-black m-2 mt-10">
                What is NPM in node.js?{" "}
              </div>
              <div className="text-gray-500 m-2 text-sm">
                NPM stands for Node Package Manager. It is a tool that helps you
                to install, manage, and share Node.js packages, or modules, that
                contain code and dependencies for your projects. NPM also
                provides a command line interface (CLI) that allows you to run
                scripts, test, and publish your packages
              </div>
            </div>
          </div>
          <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div className="h-full w-full overflow-hidden">
              {" "}
              <img
                src="https://i.ibb.co/qnKSkVV/Different-between-Mongodb-database-vs-my-SQL-database.jpg"
                alt=""
                className="w-full md:w-96 h-full"
              />{" "}
            </div>
            <div className="grid p-2">
              <div className="font-bold text-lg text-black m-2 mt-10">
                Different between Mongodb database vs mySQL database.
              </div>
              <div className="text-gray-500 m-2 text-sm">
                MongoDB does not support referential integrity, isolation, or
                complex transactions, while MySQL does. This means that MongoDB
                does not enforce the relationships between data or prevent
                concurrent access or modification of data, while MySQL does.
                MongoDB relies on the application logic to ensure data quality
                and consistency, while MySQL enforces data rules and constraints
                at the database level.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
