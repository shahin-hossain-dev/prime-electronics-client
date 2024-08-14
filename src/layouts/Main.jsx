import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
  return (
    <div className="roboto">
      <Navbar />
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
