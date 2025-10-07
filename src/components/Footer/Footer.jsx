import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-gray-300 p-6 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <img className="w-10" src={logo} alt="" />
            <h2>HERO APPS</h2>
          </div>
          <p className="mt-3 text-sm max-w-xl mx-auto">
            Hero Apps is your one-stop solution for discovering and installing
            the best applications to enhance your productivity and lifestyle.
          </p>
        </div>

        <div className="my-4 border opacity-50 border-dashed border-teal-600"></div>
        {/* Links */}

        <div className="flex justify-center gap-4 text-lg">
          <a
            href="#"
            className="bg-sky-600 p-1 rounded-full text-white hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="bg-white text-black p-1 rounded-full hover:scale-110 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="bg-blue-500 p-1 rounded-full text-white hover:scale-110 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="bg-red-600 p-1 rounded-full text-white hover:scale-110 transition"
          >
            <FaYoutube />
          </a>
        </div>

        <div className="my-4 border opacity-50 border-dashed border-teal-600"></div>
        {/* Social icons */}

        <p className="text-center mt-8 text-sm opacity-50">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
