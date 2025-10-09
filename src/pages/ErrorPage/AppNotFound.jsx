import React from 'react';
import appErrorImg from '../../assets/App-Error.png';
import { Link } from 'react-router';

const AppNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-10">
      <img
        className="w-full md:w-sm max-w-md sm:max-w-sm md:max-w-lg lg:max-w-xl"
        src={appErrorImg}
        alt="404 Error"
      />

      <div className="mt-8 flex flex-col gap-4 items-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-500">
          The App you are requesting is not found on our system.  please try another apps
        </p>

        <Link
          to="/apps"
          className="btn btn-lg mt-4 px-10 border-none text-white font-semibold 
          bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3] 
          "
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default AppNotFound;