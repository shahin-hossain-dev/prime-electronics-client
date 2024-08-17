import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="py-10 mt-12 bg-gradient-to-br from-primary to-[#d63500] ">
      <div className="w-[90%] mx-auto flex flex-col text-center md:flex-wrap md:text-start md:flex-row gap-10  md:gap-10 lg:gap-5 items-center md:items-start  md:justify-between  text-white ">
        {/* footer title */}
        <aside>
          <div className="flex md:justify-start justify-center ">
            <h2 className="text-white font-semibold text-2xl">
              Prime Electronics
            </h2>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 mt-5">
            <span className="flex items-center gap-2">
              <IoLocationOutline className="text-[#ffffff] " />
              <span>15/2, 15/D, Mirpur, Dhaka</span>
            </span>
            <span className="flex items-center gap-2">
              <IoCall className="text-[#ffffff] " />
              <span>+8801676446077</span>
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineEmail className="text-[#ffffff] " />
              <span>shahin.hossain.dev@gmail.com</span>
            </span>
            <span className="flex items-center gap-2">
              <FaGlobe className="text-[#ffffff] " />
              <Link
                to={"https://prime-electronics-b176d.web.app"}
                className="link link-hover"
                target="_blank"
              >
                www.primeelectro.com
              </Link>
            </span>
          </div>
        </aside>
        {/* footer nav section */}
        <nav className="flex flex-col space-y-3 ">
          <h6 className="font-semibold uppercase text-[#ffffff]  mb-3 ">
            Services
          </h6>
          <Link className="link link-hover">Product Sell</Link>
          <Link className="link link-hover">Delivery</Link>
          <Link className="link link-hover">Customer Service</Link>
          <Link className="link link-hover">Import & Export </Link>
        </nav>
        <nav className="flex flex-col space-y-3">
          <h6 className="font-semibold uppercase text-[#ffffff]  mb-3 ">
            Company
          </h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Career</Link>
          <Link className="link link-hover">Press & Media</Link>
        </nav>
        <nav className="flex flex-col space-y-3">
          <h6 className="font-semibold uppercase text-[#ffffff]  mb-3 ">
            Information
          </h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
        {/* news letter */}
        <div>
          {/* social links */}
          <div className="">
            <h4 className="mb-8 uppercase font-semibold text-[#ffffff] ">
              Our Social Links
            </h4>
            <div className="flex justify-center md:justify-start gap-8 text-xl">
              <Link
                to={"https://www.facebook.com/"}
                target="_blank"
                className="hover:text-[#0066b2] hover:scale-150 duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                to={"https://twitter.com/"}
                target="_blank"
                className="hover:text-[#0066b2] hover:scale-150 duration-300"
              >
                <FaTwitter />
              </Link>
              <Link
                to={"https://www.instagram.com/"}
                target="_blank"
                className="hover:text-[#0066b2] hover:scale-150 duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                to={"https://www.linkedin.com/"}
                target="_blank"
                className="hover:text-[#0066b2] hover:scale-150 duration-300"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10 border-b border-white" />
      <p className="text-white text-center">
        <span className="text-[#ffffff] "> &copy; </span>
        <small>2024 All Rights Reserved Prime Electronics </small>
      </p>
    </footer>
  );
};

export default Footer;
