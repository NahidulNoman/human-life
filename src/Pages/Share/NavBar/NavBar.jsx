import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/seelifeLogo.png";

const NavBar = () => {
  const menuItems = (
    <>
      <li className="font-semibold ">
        <Link to="/home" className="rounded-lg text-white">
          Home
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/causes" className="rounded-lg text-white">
          Causes
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/event" className="rounded-lg text-white">
          Event
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog" className="rounded-lg text-white">
          Blog
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/about" className="rounded-lg text-white">
          About
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/contact" className="rounded-lg text-white">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-green-400 shadow-sm flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-400 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="text-accent normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
