import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Main = () => {
  return (
    <div className="roboto">
      <Navbar />
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
