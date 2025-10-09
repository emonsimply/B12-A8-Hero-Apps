import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const App = ({ app }) => {
  const { image, title, ratingAvg, downloads, id } = app;
  return (
    <Link to={`/app/${id}`}>
    <div className=" bg-white shadow-md rounded-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
      <div className="p-4">
        <img className="rounded-lg w-44 lg:w-full" src={image} alt={title}  />

        <div className="">
          <h2 className="font-semibold my-2">{title}</h2>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm font-semibold">
              <FaDownload className="text-green-500" />
              <span>{downloads}M</span>
            </div>

            <div className="flex items-center gap-1 bg-orange-100 text-orange-500 px-2 py-1 rounded-md text-sm font-semibold">
              <FaStar />
              <span>{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default App;
