import React, { useEffect, useState } from "react";
import InstalledApps from "./installedApps";


const AppInstallation = () => {
  const [instalList, setInstalList] = useState([]);
  const [sortBy, setSortBy] = useState("none");

  
  useEffect(() => {
    const installedList = JSON.parse(localStorage.getItem("installation"));
    if (Array.isArray(installedList)) {
      setInstalList(installedList);
    } else {
      setInstalList([]); 
    }
  }, []);

  
  useEffect(() => {
    if (sortBy === "none") return;

    setInstalList((prevList) => {
      const sorted = [...prevList].sort((a, b) => {
        if (sortBy === "size-desc") return b.size - a.size;
        if (sortBy === "size-asc") return a.size - b.size; 
        return 0;
      });
      return sorted;
    });
  }, [sortBy]);

  return (
    <div className="max-w-7xl mx-auto p-4 my-8 space-y-4">
     
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 text-sm mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <p className="font-bold mb-3 md:mb-0">
          ({instalList.length}) Apps Found
        </p>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-bordered w-full max-w-40 bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
        >
          <option value="none" disabled>
            Sort By Size
          </option>
          <option value="size-desc">High → Low</option>
          <option value="size-asc">Low → High</option>
        </select>
      </div>

      
      {instalList.length > 0 ? (
        instalList.map((app) => (
          <InstalledApps key={app.id} app={app}></InstalledApps>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-8">
          No installed apps found.
        </p>
      )}
    </div>
  );
};

export default AppInstallation;
