import React from "react";
import logo from "../../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="flex items-center justify-center">
        <span className="flex text-5xl text-gray-400 font-bold">
          L<img src={logo} alt="Rotating" className="w-10 h-10  animate-spin" />
          ading
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
