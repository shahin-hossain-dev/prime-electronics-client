import { useContext } from "react";
import ActiveLink from "../../components/ActiveLink";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logout Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
  };
  return (
    <div className="lg:w-[80%] mx-auto max-w-[1440px]">
      <div className="navbar bg-base-100  py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <ActiveLink to={"/"}>Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to={"/all-products"}>All Products</ActiveLink>
              </li>
              <li>
                <ActiveLink to={"/contact-us"}>Contact Us</ActiveLink>
              </li>
              <li>
                <ActiveLink to={"/your-order"}>Your Order</ActiveLink>
              </li>
            </ul>
          </div>
          <a className="text-xl md:text-3xl font-bold text-primary">
            Prime Electronics
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <label className="input input-bordered flex items-center gap-2">
            <input
              id="input-search"
              type="text"
              className="grow"
              placeholder="Search"
            />
            <button id="btn-search" className="btn btn-primary btn-sm">
              Search
            </button>
          </label>
        </div>
        <div className="navbar-end">
          {!user && (
            <div>
              <Link to={"/login"}>
                <button className="btn btn-primary btn-outline btn-sm me-3">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="btn btn-primary btn-outline btn-sm me-3">
                  Register
                </button>
              </Link>
            </div>
          )}
          {user && (
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="btn btn-primary btn-outline btn-sm mt-2 me-3  "
              >
                Logout
              </button>
              <div className="avatar" title={user?.displayName}>
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* for small screen search */}
      <div className="lg:hidden w-[95%] mx-auto">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <button className="btn btn-primary btn-sm">Search</button>
        </label>
      </div>
      {/* navigation bar */}
      <div className="lg:flex justify-center hidden border-b">
        <ul className="menu menu-horizontal px-1 uppercase">
          <li>
            <ActiveLink to={"/"}>Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/all-products"}>All Products</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/contact-us"}>Contact Us</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/your-order"}>Your Order</ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
