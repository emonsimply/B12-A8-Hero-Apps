import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
      <img className="" src={errorImg} alt="" />
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="font-bold text-5xl">Oops, page not found!</h1>
        <p className="text-xl text-gray-500">The page you are looking for is not available.</p>
        <Link
          to="/"
          className="btn btn-lg px-10 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3]"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
