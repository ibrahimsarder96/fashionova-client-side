import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
  const menuItem = <>
    <li className='text-xl '><CustomLink to="/">Home</CustomLink></li>
    <li className='text-xl '><CustomLink to="/about">About</CustomLink></li>
    <li className='text-xl '><CustomLink to="/contact">Contact</CustomLink></li>
    <li className='text-xl '><CustomLink to="/login">Login</CustomLink></li>
     
  </>
  return (
    <div className="navbar bg-black Static ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link className="font-extrabold normal-case text-lime-400 lg:text-4xl lg:pl-36">Fashionova</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>
</div>
  );
};

export default Navbar;