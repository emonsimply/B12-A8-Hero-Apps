import React from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import downloadsIcon from "../../assets/icon-downloads.png";
import ratingAvgIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();

  const app = apps.find((app) => app.id === parseInt(id));

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
  } = app || {};

  const handleInstallBtn = () => {
  const existingList = JSON.parse(localStorage.getItem("installation"));
  let updatedList = [];

  if (Array.isArray(existingList)) {
    const isAlreadyAdded = existingList.some((a) => a.id === app.id);
    if (isAlreadyAdded) return alert("App is already in the installation list.");

    updatedList = [...existingList, app];
  } else {
    updatedList = [app]; 
  }

  localStorage.setItem("installation", JSON.stringify(updatedList));
};

  return (
    <div className="max-w-7xl mx-auto p-4 my-8 ">
      <div className="md:flex items-center gap-6">
        {/* image */}
        <div>
          <img className="w-64" src={image} alt={title} />
        </div>

        <div className="space-y-2">
          <div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-gray-500 mt-1">
              Developed by{" "}
              <span className="text-[#632EE3] font-semibold">
                {companyName}
              </span>
            </p>
          </div>
          <hr className="opacity-30 mt-3 w-full" />

          {/* 3 card */}
          <div className="flex items-center gap-12">
            <div className=" mt-4">
              <img src={downloadsIcon} alt="" />
              <p className="text-sm opacity-70">Downloads</p>
              <p className="text-3xl font-bold">{downloads}</p>
            </div>
            <div className=" mt-4">
              <img src={ratingAvgIcon} alt="" />
              <p className="text-sm opacity-70">Average Ratings</p>
              <p className="text-3xl font-bold">{ratingAvg}</p>
            </div>
            <div className=" mt-4">
              <img src={reviewsIcon} alt="" />
              <p className="text-sm opacity-70">Total Reviews</p>
              <p className="text-3xl font-bold">{reviews}</p>
            </div>
          </div>

          <button
            onClick={handleInstallBtn}
            className="btn bg-emerald-400 text-white hover:bg-emerald-500"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>

      {/* description div */}
      <div>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Description</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
