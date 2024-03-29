import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import Loading from './Loading';
import logo from '../../assest/logo/logo2.png';
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
    <li className='text-xl font-bold'><CustomLink to="/">Home</CustomLink></li>
    
    {/* {
      user && <li className='text-xl '><CustomLink to="/about">About</CustomLink></li>
    } */}
    {
      user ? <li className='text-xl font-bold'><CustomLink to="/order">  <label tabIndex={0} className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="badge badge-sm indicator-item">0</span>
      </div>
    </label></CustomLink></li> :  <li className='text-xl font-bold'><CustomLink to="/order">  <label tabIndex={0} className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="badge badge-sm indicator-item">0</span>
      </div>
    </label></CustomLink></li>
    }
    {
      user && <li className='text-xl '><Link to="/profile">
         <div className="dropdown dropdown-start">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full bg-white">
          <img src={user?.photoURL} alt="" className=''/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content lg:bg-white bg-gray-300 rounded-box w-52">
        <li className=''>{user  && <CustomLink to="/dashboard">Dashboard</CustomLink>}</li>
        <li className=''>{user  && <CustomLink onClick={logout} to="/login">LogOut</CustomLink>}</li>
      </ul>
    </div>
        </Link></li>
    } 
    <li className='text-xl font-bold'>
      {user  ? "" : <CustomLink to="/login">Login</CustomLink>}
      </li>
  </>
  return (
    <div style={{backgroundColor:"#95D7DE"}} className="navbar  sticky top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn bg-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content z-0 shadow bg-white rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link to='/' className="pl-16"><img className='lg:h-14 lg:w-28 sm:lg-7 sm:w-14' src={logo} alt={logo}></img></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal p-0 pl-96 ml-96">
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