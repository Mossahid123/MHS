import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    const menuItems = <>
        <li><Link to="/home"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> Home</Link></li>
        <li>{admin && <Link to="/add-product"> <img className='h-5 w-5' src="https://img.icons8.com/material-rounded/344/shopping-cart.png" alt="" /> Add Product</Link>}</li>
        <li>{admin && <Link to="/manage-product"> <img src="https://i.ibb.co/pRKJTDy/product-icon-collection-trendy-modern-flat-linear-vector-white-background-thin-line-outline-illustra.jpg" className='w-5 h-5' alt="" /> Manage Product</Link>}</li>
        <li>{admin && <Link to="/manage-orders"> <img src="https://i.ibb.co/ZdHVFph/complete-order-icon-in-line-style-for-any-projects-vector-35249263.jpg" className='w-5 h-5' alt="" />Manage Orders</Link>}</li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/my-portfolio"> <img src="https://i.ibb.co/x3rs6rh/profile-icon-design-free-vector.jpg" className='w-5 h-5' alt="" /> My Portfolio</Link></li>
        <li>{user && <Link to="/dashboard"> <img className='h-5 w-5' src="https://i.ibb.co/WnCRQyz/dashboard-icon-vector-22894570.jpg" alt="" /> Dashboard</Link>}</li>
        <li>{user ? <button className="btn btn-ghost" onClick={logout} > <img src="https://i.ibb.co/F0h9Jbn/download.png" className='w-5 h-5' alt="" /> Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost  text-xl">MHS
                    </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className='menu menu-horizontal p-0'>
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;