import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaAtom  } from "react-icons/fa6";

const NavBar = () => {

    const {user, signOutUser} = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
            console.log('User Sign-out successful.');
            }).catch((error) => {
            console.error (error)
            });
    }
    const userDefaultPic = "https://i.ibb.co/F7V7vzb/user.jpg";

    const navLinks = <>
        <li><NavLink to="/" className="text-base bg-transparent hover:bg-text-theme-light text-theme-light hover:text-theme-primary rounded shadow hover:shadow-sm border border-none hover:border-white">Home</NavLink></li>
        <li><NavLink to="/membership" className="text-base bg-transparent hover:bg-text-theme-light text-theme-light hover:text-theme-primary rounded shadow hover:shadow-sm py-2 px-4 border border-none hover:border-white">Membership</NavLink></li>
    </>


    return (
        // <div className="w-full navbar sticky bg-white inset-x-0 top-0 z-50">
        //     <div className="max-w-6xl space-x-10 mx-auto text-black">
        <div className="sticky top-0 bg-white z-50 shadow-theme-primary shadow-md">
            <div className="max-w-6xl navbar mx-auto px-6 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a href="/"><div className="flex"><FaAtom  className="text-4xl text-theme-primary"></FaAtom >&nbsp;<span className="py-2 text-slate-600 text-xs md:text-2xl font-extrabold italic">Dev&nbsp;</span><span className="py-2 text-theme-primary text-xs md:text-2xl font-extrabold italic">Forum</span>
                        </div></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-6">

                    <div className="dropdown">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#ffffff" viewBox="0 0 24 24" stroke="#ff0000"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-sm indicator-item text-theme-primary">8</span>
                            </div>
                        </button>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                { user ? 
                                    <><img className="w-10" src={user.photoURL} alt="" /></>
                                    : <><img className="w-10" src={userDefaultPic} alt="default" /></>
                                }
                                </div>
                            </label>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><span>{user?.displayName}</span></li>
                            <li><Link to="/userdashboard/myprofile">user Dashboard</Link></li>
                            <li><Link to="/admindashboard/adminprofile">admin Dashboard</Link></li>
                            <li><a onClick={handleSignOut} className="bg-transparent hover:bg-text-theme-light text-theme-light hover:text-theme-primary ">Log Out</a></li>
                        </ul>
                    </div>
                    
                    {
                        user ? <>
                            
                            {/* <a onClick={handleSignOut} className="bg-transparent hover:bg-text-theme-light text-theme-light hover:text-theme-primary rounded shadow hover:shadow-lg py-2 px-4 border border-theme-light hover:border-white">Log Out</a> */}
                            
                        </>
                        : 
                        <>
                            <Link to="/login"><button className="bg-transparent hover:bg-text-theme-light text-theme-light hover:text-theme-primary rounded shadow hover:shadow-lg py-2 px-4 border border-theme-light hover:border-white">Join Us</button></Link>
                            <Link to="/register"><button className="bg-transparent hover:bg-text-theme-light text-theme-light hover:text-theme-primary rounded shadow hover:shadow-lg py-2 px-4 border border-theme-light hover:border-white">Register</button></Link> 
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;