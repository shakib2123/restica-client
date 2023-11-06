import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../pages/Blog/Blog";
import AllFood from "../pages/AllFood/AllFood";
import SingleFoodPage from "../pages/SingleFoodPage/SingleFoodPage";
import OrderPage from "../pages/OrderPage/OrderPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        node: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/allFood",
    element: <AllFood />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/addFood",
    element: (
      <PrivateRoute>
        <AddProduct />
      </PrivateRoute>
    ),
  },
  {
    path: "/singleFoodPage/:id",
    element: <SingleFoodPage />,
  },
  {
    path: "/orderPage/:id",
    element: <OrderPage />,
  },
]);

export default Router;
