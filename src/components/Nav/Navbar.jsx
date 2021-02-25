import React from "react";
import Burger from "./Burger";
import logo from '../../logo.svg'



const Navbar = () => {
  return (
    <header className="w-full bg-gray-900 opacity-75">
      <nav className="container mx-auto py-2 px-2 flex justify-center items-center">
        <div className="w-full flex flex-row justify-between ">
          <div className="w-48 sm:w-56 p-0 m-0 z-50">
            <img src={logo} alt="blooms hair logo"  />
          </div>
          <Burger />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
