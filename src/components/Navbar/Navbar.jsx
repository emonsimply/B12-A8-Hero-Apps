import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router";

import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Apps</NavLink>
      </li>
      <li>
        <NavLink>Installation</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between w-full">
        <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          <img className="w-8" src={logo} alt="" />
          HERO APPS
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <FaGithub />
          Contribution
        </a>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
