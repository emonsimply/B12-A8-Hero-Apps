import React, { useEffect, useState } from "react";
import InstalledApps from "./installedApps";

const AppInstallation = () => {
  const [instalList, setInstalList] = useState([]);

  useEffect(() => {
    const installedList = JSON.parse(localStorage.getItem("installation"));
    if (Array.isArray(instalList)) setInstalList(installedList);
  }, []);

  
  return <div className="max-w-7xl mx-auto p-4 my-8 space-y-4">
    <div className="text-center mt-8">
        <h1 className="text-3xl font-bold ">Your Installed Apps</h1>
        <p className="text-gray-500 text-sm mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
              <p className="font-bold mb-3 md:mb-0">
                ({instalList.length}) Apps Found
              </p>
              
            </div>
    {
      instalList?.map(app => <InstalledApps key={app.id} app={app}></InstalledApps>)
    }
    </div>;
};

export default AppInstallation;
