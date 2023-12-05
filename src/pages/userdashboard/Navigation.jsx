import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="py-6 px-5 w-1/6">
            <div className="flex items-center space-x-4 p-2 bg-cyan-600 rounded-md">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
            </div>
            <div>
                <p className="text-lg text-white font-semibold">User Dashboard</p>
            </div>
            </div>
            <div className="mt-8">
            <ul className="space-y-10">
                <li>
                    <Link to="/userdashboard/myprofile" className="flex items-center text-sm font-semibold text-gray-500 hover:text-cyan-600 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-cyan-600 transition duration-200" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    My Profile</Link>
                </li>
                <li>
                    <Link to="/userdashboard/addposts" className="flex items-center text-sm font-semibold text-gray-500 hover:text-cyan-600 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-cyan-600 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Add Post</Link>
                </li>
                <li>
                    <Link to="/userdashboard/myposts" className="flex items-center text-sm font-semibold text-gray-500 hover:text-cyan-600 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-cyan-600 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    My Posts</Link>
                </li>
                
            </ul>
            </div>
        </div>
    );
};

export default Navigation;