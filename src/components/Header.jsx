import React from "react";
import { NavLink } from "react-router-dom";


/*
NavLink Syntax with active styles

<NavLink
  to="/home"
  className={({ isActive }) => isActive ? "active-class" : "inactive-class"}
>
  Home
</NavLink>

*/

function Header() {
  // Base styles
  const baseStyle = "p-2 rounded-lg transition duration-300 ease-in-out";

  return (
    <div className="flex w-full h-20 bg-[#272727] gap-10 text-white text-center justify-center items-center mb-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? "bg-white text-black" : "hover:bg-white hover:text-black"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/rival"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? "bg-white text-black" : "hover:bg-white hover:text-black"}`
        }
      >
        New Rivals
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? "bg-white text-black" : "hover:bg-white hover:text-black"}`
        }
      >
        All Products
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? "bg-white text-black" : "hover:bg-white hover:text-black"}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? "bg-white text-black" : "hover:bg-white hover:text-black"}`
        }
      >
        Contact
      </NavLink>
    </div>
  );
}

export default Header;
