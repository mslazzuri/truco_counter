import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const links = [
    { to: "/", label: "Home" },
    { to: "/scoreboard-paulista", label: "Paulista" },
    { to: "/scoreboard-mineiro", label: "Mineiro" },
    { to: "/how-to-play", label: "How to Play" },
    { to: "/order-of-cards", label: "Order of Cards" },
];

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
                Secco Truco
            </NavLink>

            <button
                className={`hamburger ${open ? "open" : ""}`}
                onClick={() => setOpen(prev => !prev)}
                aria-label="Toggle menu"
                aria-expanded={open}
            >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
            </button>

            <ul className={`nav-links ${open ? "open" : ""}`}>
                {links.map(({ to, label }) => (
                    <li key={to}>
                        <NavLink
                            to={to}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            onClick={() => setOpen(false)}
                            end={to === "/"}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
