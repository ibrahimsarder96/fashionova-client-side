import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
  <div className="md:px-36">
      <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <h1 className='text-purple-500  text-3xl font-bold'>My Dashboard</h1>
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My order</Link></li>
      <li><Link to='/dashboard/review'>My review</Link></li>
    </ul>
  </div>
</div>
  </div>
  );
};

export default Dashboard;