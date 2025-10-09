import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const InstalledApps = ({ app, handleUninstall }) => {
  const { image, title, downloads, ratingAvg, size, id } = app || {};
  return (
    <div className=" bg-white rounded-sm flex p-2 justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="rounded-lg w-16 md:w-20 " src={image} alt={title} />
        <div>
          <h2 className="font-semibold my-2">{title}</h2>
          <div className="flex items-center gap-4 mt-2 text-sm">
            <p className="flex justify-center items-center gap-1">
              <FaDownload className="text-green-500" />
              {downloads}M
            </p>
            <p className="flex justify-center items-center gap-1">
              <FaStar className="text-orange-500" />
              {ratingAvg}
            </p>
            <p className="text-gray-500">{size} MB</p>
          </div>
        </div>
      </div>
      <button onClick={()=>handleUninstall(id)} className="btn btn-sm md:btn-md bg-emerald-400 text-white hover:bg-emerald-500">
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApps;
