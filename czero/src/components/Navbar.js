import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    function closeSidebar() {
        document.getElementById("check").checked = false;
    }

    return (
        <div className="main_box">
            <input type="checkbox" id="check" />
            <div className="btn_one">
                <label htmlFor="check">
                    <i className="fa-solid fa-bars"></i>
                </label>
            </div>

            <div className="sidebar_menu">
                <div className="logo">
                    <a href="#">CarbonZero</a>
                </div>

                <div className="btn_two">
                    <label htmlFor="check">
                        <i className="fa-solid fa-xmark"></i>
                    </label>
                </div>

                <div className="home">
                    <ul>
                        <li>
                            <Link to="/" onClick={closeSidebar}>
                                <i className="fa-solid fa-house-chimney"></i> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/calculator" onClick={closeSidebar}>
                                <i className="fa-solid fa-calculator"></i> Calculator
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" onClick={closeSidebar}>
                                <i className="fa-solid fa-circle-user"></i> My Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/developers" onClick={closeSidebar}>
                                <i className="fa-solid fa-d"></i> Developers
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="social_media">
                    <ul>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
