import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Homepage/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import ContactUs from "../pages/ContactUs/ContactUs";
import Order from "../pages/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/your-order",
        element: <Order />,
      },
    ],
  },
]);

export default router;
