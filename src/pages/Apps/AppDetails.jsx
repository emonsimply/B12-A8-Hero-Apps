import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import downloadsIcon from "../../assets/icon-downloads.png";
import ratingAvgIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AppNotFound from "../ErrorPage/AppNotFound";


const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const [btnText, setBtnText] = useState("Install Now");

  const app = apps.find((app) => app.id === parseInt(id));
  if(!app){
    return <AppNotFound></AppNotFound>
  }

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
    setBtnText("Installed");
    const existingList = JSON.parse(localStorage.getItem("installation"));
    let updatedList = [];

    if (Array.isArray(existingList)) {
      const isAlreadyAdded = existingList.some((a) => a.id === app.id);
      if (isAlreadyAdded)
        return toast.error(`${app.title} is already installed!`, {
          position: "top-center",
        });

      updatedList = [...existingList, app];
    } else {
      updatedList = [app];
    }
    toast.success(`${app.title} installed successfully!`, {
      position: "top-center",
    });
    localStorage.setItem("installation", JSON.stringify(updatedList));
  };



  return (
    
    <div className="max-w-7xl mx-auto p-4 my-8 ">
      
      <div className="md:flex items-center gap-6 mb-10">
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
          <div className="border border-b-gray-50 opacity-30 w-full"></div>

          {/* 3 card */}
          <div className="flex items-center gap-12">
            <div className=" mt-4">
              <img src={downloadsIcon} alt="" />
              <p className="text-sm opacity-70">Downloads</p>
              <p className="text-3xl font-bold">{downloads}M</p>
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
            className="btn bg-emerald-400 text-white hover:bg-emerald-500 mt-2"
          >
            {btnText} {btnText === "Install Now" && `(${size} MB)`}
          </button>
        </div>
      </div>

      {/* Review Chart */}
      <section className="">
        <div className="border border-b-gray-50 opacity-30 w-full"></div>
        <div className="my-10">
          <h3 className="text-2xl font-semibold mb-4">Ratings</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={app?.ratings}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="#FF8C00"
                  barSize={24}
                  radius={[4, 4, 4, 4]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="border border-b-gray-50 opacity-30 w-full"></div>
      </section>

      {/* description div */}

      <div>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Description</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
