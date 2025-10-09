import React from "react";
import useApps from "../../hooks/useApps";
import App from "./App";
import { Link } from "react-router";
import LoadingSpinner from "../Loading/LoadingSpinner";

const TopApps = () => {
  const { apps, loading } = useApps();

  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col items-center my-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
          {apps.slice(0, 8).map((app) => (
            <App key={app.id} app={app}></App>
          ))}
        </div>
      )}

      <Link
        to="/apps"
        className="btn px-8  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3]"
      >
        Show All
      </Link>
    </div>
  );
};

export default TopApps;
