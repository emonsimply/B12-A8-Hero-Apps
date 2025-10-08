import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router";

import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apps">Apps</NavLink>
      </li>
      <li>
        <NavLink to="/installation">Installation</NavLink>
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
          <Link to="/" className="flex items-center gap-1 font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            <img className="w-8" src={logo} alt="" />
            HERO APPS
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/emonsimply/B12-A8-Hero-Apps"
            target="_blank"
            className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3]"
          >
            <FaGithub />
            Contribution
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
