import { Outlet } from "react-router-dom";

import Navigation from "../pages/userdashboard/Navigation";
import NavBar from "../pages/shared/navbar/NavBar";
import Footer from "../pages/shared/footer/Footer";

const UserDashboard = () => {

    return (
        <>
            <NavBar></NavBar>
            <div className="min-h-screen flex">
                <Navigation></Navigation>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default UserDashboard;