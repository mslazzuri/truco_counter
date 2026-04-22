import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
    return (
        <div className="fabric">
            <Navbar />
            <div className="page-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
