import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
  <div className="md:px-36">
      <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content mt-6">
    {/* <h1 className='text-purple-500 text-center text-3xl font-bold'>Welcome to Dashboard</h1> */}
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-6 w-76 bg-indigo-400 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li className='text-2xl text-white hover:text-black hover:bg-lime-200 rounded-md font-bold'><Link to='/dashboard'>My orders</Link></li>
      <li className='text-2xl text-white hover:text-black hover:bg-purple-200 rounded-md font-bold'><Link to='/dashboard/review'>My review</Link></li>
      <li className='text-2xl text-white hover:text-black hover:bg-lime-200 rounded-md font-bold'><Link to='/dashboard/users'>All Users</Link></li>
      <li className='text-2xl text-white hover:text-black hover:bg-purple-200 rounded-md font-bold'><Link to='/dashboard/addProduct'>Add Product</Link></li>
      <li className='text-2xl text-white hover:text-black hover:bg-lime-200 rounded-md font-bold'><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
      <li className='text-2xl text-white hover:text-black hover:bg-purple-200 rounded-md font-bold'><Link to='/dashboard/productSell'>Product Sell</Link></li>
      <li className='text-2xl text-white hover:text-black hover:bg-lime-200 rounded-md font-bold'><Link to='/dashboard/investment'>Investment</Link></li>
    </ul>
  </div>
</div>
  </div>
  );
};

export default Dashboard;