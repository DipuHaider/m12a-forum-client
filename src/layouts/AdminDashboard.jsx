import { Outlet } from "react-router-dom";

import NavBar from "../pages/shared/navbar/NavBar";
import Navigation from "../pages/admindashboard/Navigation";
import Footer from "../pages/shared/footer/Footer";

const AdminDashboard = () => {

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

export default AdminDashboard;