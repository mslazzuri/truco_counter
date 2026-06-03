import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
    const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") !== "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <div className="fabric">
            <Navbar isDark={isDark} toggleTheme={() => setIsDark(prev => !prev)} />
            <div className="page-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
