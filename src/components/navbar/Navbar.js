import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
       <div className="nav-box">
        <header>
            <ul className="navbar">
                <li className="site-title">
                    <Link to="/">Youtube</Link>
                </li>
                <li className="list-item">
                <Link to="/">Home</Link>
                </li>
                <li className="list-item">
                <Link to="/About">About</Link>
                </li>
            </ul>
        </header>
       </div>
    );
}

export default Navbar;