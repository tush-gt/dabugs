import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "./Home";
import Profile from "./profile/Profile";
import Developer from "./Developer";
import Calculator from "./Calculator";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


function Navbar() {
    const [user, setUser] = useState(null);
    function closeSidebar() {
        document.getElementById("check").checked = false;
    }

    useEffect(()=>
    {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

        });
        return ()=> unsubscribe();
    });

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
                            <Link to={user ? "/profile" : "/signup"} onClick={closeSidebar}>
                                <i className="fa-solid fa-calculator"></i> {user ? "Profile" : "Signup"}
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={closeSidebar}>
                                <i className="fa-solid fa-circle-user"></i> About
                            </Link>
                        </li>
                        <li>
                            <Link to="/developer" onClick={closeSidebar}>
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
