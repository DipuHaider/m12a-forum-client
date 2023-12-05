import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaRibbon } from "react-icons/fa6";

const MyProfile = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="bg-cyan-50 flex-grow py-12 px-10">
            <div className="flex justify-between">
                <div>
                    <div className="flex justify-start">
                    <h2 className="text-lg font-bold text-cyan-600">Hi, {user?.displayName}</h2><span><FaRibbon  className="text-4xl text-gray-400"></FaRibbon ></span>
                    {/* <h2 className="text-lg font-bold text-cyan-600">Hi, {user?.displayName}</h2><span><FaRibbon  className="text-4xl text-yellow-600"></FaRibbon ></span> */}
                    </div>
                    <img className="w-24 rounded-lg py-5" src={user.photoURL} alt="" />
                    <h4 className="text-sm font-bold text-slate-900">{user?.email}</h4>
                    
                </div>
            </div>
        </div>
    );
};

export default MyProfile;