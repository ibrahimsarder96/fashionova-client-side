import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import Loading from './Loading';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  if(loading){
    return <Loading></Loading>
  }

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const menuItem = <>
    <li className='text-xl '><CustomLink to="/">Home</CustomLink></li>
    
    {/* {
      user && <li className='text-xl '><CustomLink to="/about">About</CustomLink></li>
    } */}
    {
      user ? <li className='text-xl '><CustomLink to="/order">  <label tabIndex={0} className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="badge badge-sm indicator-item">0</span>
      </div>
    </label></CustomLink></li> :  <li className='text-xl '><CustomLink to="/order">  <label tabIndex={0} className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="badge badge-sm indicator-item">0</span>
      </div>
    </label></CustomLink></li>
    }
    {
      user && <li className='text-xl '><CustomLink to="/dashboard">Dashboard</CustomLink></li>
    }
    
    <li className='text-xl '>
      {user  ? <CustomLink onClick={logout} to="/login">LogOut</CustomLink> : <CustomLink to="/login">Login</CustomLink>}
      </li>
  </>

  return (
    <div style={{backgroundColor:"#95D7DE"}} className="navbar  sticky top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn bg-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 shadow bg-gray-400 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link to='/' className="font-extrabold normal-case text-red-300 lg:text-4xl ">Shop</Link>
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