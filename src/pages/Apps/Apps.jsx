import React, { useState } from "react";
import useApps from "../../hooks/useApps";
import App from "./App";
import { CiSearch } from "react-icons/ci";

const Apps = () => {
  const [search, setSearch] = useState("");
  const { apps } = useApps();

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold ">Our All Applications</h1>
        <p className="text-gray-500 text-sm mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <p className="font-bold mb-3 md:mb-0">
          ({searchedApps.length}) Apps Found
        </p>
        <label
          htmlFor="searchApps"
          className="flex items-center gap-3 w-full max-w-sm px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus-within:ring-2 focus-within:ring-[#632EE3] transition"
        >
          <CiSearch className="text-gray-500 text-xl" />

          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            name="searchApps"
            id="searchApps"
            placeholder="Search Apps..."
            className="flex-1 outline-none bg-transparent placeholder-gray-400"
          />
        </label>
      </div>
      {searchedApps.length === 0 && (
        <p className="text-center text-lg text-gray-500 mt-8">No App Found</p>
      )}
      <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {searchedApps.map((app) => (
          <App key={app.id} app={app}></App>
        ))}
      </div>
    </div>
  );
};

export default Apps;
