import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="py-6 px-5 w-1/6">
            <div className="flex items-center space-x-4 p-2 bg-red-600 rounded-md">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
            </div>
            <div>
                <p className="text-lg text-white font-semibold">Admin Dashboard</p>
            </div>
            </div>
            <div className="mt-8">
            <ul className="space-y-10">
                <li>
                <Link to="/admindashboard/adminprofile" className="flex items-center text-sm font-semibold text-gray-500 hover:text-red-600 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-red-600 transition duration-200" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    Admin Dashboard</Link>
                </li>
                
                <li>
                <Link to="/admindashboard/manageusers" className="flex items-center text-sm font-semibold text-gray-500 hover:text-red-600 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-red-600 transition duration-200" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    Manage Users</Link>
                </li>
                <li>
                <Link to="/admindashboard/reportedcomments" className="flex items-center text-sm font-semibold text-gray-500 hover:text-red-600 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-red-600 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    Reported Comments/Activities</Link>
                </li>
                <li>
                <Link to="/admindashboard/makeannouncements" className="flex items-center text-sm font-semibold text-gray-500 hover:text-red-600 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-red-600 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Make Announcements</Link>
                </li>
                
            </ul>
            </div>
        </div>
    );
};

export default Navigation;