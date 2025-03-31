import React from 'react'
import { Link } from "react-router";

function Header() {

const hoverStyle = `
hover:bg-red-500 p-2 rounded-lg
`;

  return (
    <div className='flex w-full h-20 bg-[#272727] gap-10 text-white text-center justify-center text-justify items-center'>
    <Link to="/" className={hoverStyle}>Home</Link>
    <Link to="/rival" className={hoverStyle}>New rivals</Link>
    <Link to="/products" className={hoverStyle}>All Products</Link>
    <Link to="/about" className={hoverStyle}>About</Link>
    <Link to="/contact" className={hoverStyle}>Contact</Link>
    </div>
  )
}

export default Header
