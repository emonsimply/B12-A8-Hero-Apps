import React from "react";
import playLogo from "../../assets/google-play-logo.png";
import appLogo from "../../assets/App_Store.svg.png";
import bannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-6">
      <h1 className="text-6xl font-bold max-w-lg ">
        We Build{" "}
        <span className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="max-w-4xl text-gray-500 my-6 text-lg">
        At HERO APPS , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex gap-3 mb-6">
        <a
          href="https://play.google.com/store/apps?hl=en"
          target="_blank"
          className="btn btn-lg"
        >
          <img className="w-5" src={playLogo} alt="" />
          Google Play
        </a>
        <a
          href="https://www.apple.com/in/app-store/"
          target="_blank"
          className="btn btn-lg"
        >
          <img className="w-5" src={appLogo} alt="" />
          App Store
        </a>
      </div>
      <img className="w-2xl" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
