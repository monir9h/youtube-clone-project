import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
       <div className="nav-box">
        <header>
            <ul className="navbar">
                <li className="site-title"><span>Youtube</span></li>
                <li className="list-item">Home</li>
                <li className="list-item">About</li>
            </ul>
        </header>
       </div>
    );
}