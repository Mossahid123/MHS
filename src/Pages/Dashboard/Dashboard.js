import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-5xl text-purple-500'>Dashboard</h2>
                <Outlet></Outlet>
               

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/my-review'>Add a Review</Link></li>
                    <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                  { admin && <>
                    <li><Link to='/dashboard/making-admin'>Make Admin</Link></li>
                  </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;