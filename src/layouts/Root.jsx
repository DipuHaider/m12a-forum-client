import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/navbar/NavBar";
import Footer from "../pages/shared/footer/Footer";


const Root = () => {
    return (
        <div className="mx-auto font-manrope">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;