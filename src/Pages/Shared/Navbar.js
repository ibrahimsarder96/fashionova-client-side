import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const menuItem = <>
    <li className='text-xl '><CustomLink to="/">Home</CustomLink></li>
    
    {
      !user && <li className='text-xl '><CustomLink to="/about">About</CustomLink></li>
    }
    {
      user && <li className='text-xl '><CustomLink to="/order">Order</CustomLink></li>
    }
    {
      user && <li className='text-xl '><CustomLink to="/dashboard">Dashboard</CustomLink></li>
    }
    
    <li className='text-xl '>
      {user  ? <CustomLink onClick={logout} to="/login">LogOut</CustomLink> : <CustomLink to="/login">Login</CustomLink>}
      </li>
  </>

  return (
    <div className="navbar bg-gray-100  sticky top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn bg-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link to='/' className="font-extrabold normal-case text-lime-400 lg:text-4xl ">Fashionova</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal p-0 pl-96 ml-64">
      {menuItem}
    </ul>
  </div>
  <div className="navbar-end">
  <label htmlFor='dashboard-sidebar' tabIndex={0} className="btn bg-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
</div>
  );
};

export default Navbar;