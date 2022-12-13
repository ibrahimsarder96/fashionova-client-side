import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
  <div className="md:px-36">
      <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content mt-6">
    <h1 className='text-purple-500 text-center text-3xl font-bold'>Welcome to Dashboard</h1>
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-6 w-60 bg-gray-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li className='text-2xl font-bold'><Link to='/dashboard'>My orders</Link></li>
      <li className='text-2xl font-bold'><Link to='/dashboard/review'>My review</Link></li>
    </ul>
  </div>
</div>
  </div>
  );
};

export default Dashboard;