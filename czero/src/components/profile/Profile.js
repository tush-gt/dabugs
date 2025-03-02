import React, { useEffect, useState } from "react";
import db from "./Firebase";
import { query, orderBy, limit, getDocs, collection, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import "./profile.css";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [history, setHistory] = useState([]); // ✅ Added missing state

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                fetchProfile(user.uid);
                fetchHistory(); // ✅ Calling fetchHistory
            }
        });
    }, []);

    // Fetch Profile Data from Firestore
    const fetchProfile = async (uid) => {
        try {
            const userRef = doc(db, "users", uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                setUserData(userSnap.data());
            } else {
                console.log("No user data found!");

            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    // Fetch History Data
    const fetchHistory = async () => {
        try {
            const historyRef = collection(db, "history");
            const q = query(historyRef, orderBy("timestamp", "desc"), limit(5));
            const snapshot = await getDocs(q);
            const historyData = snapshot.docs.map(doc => doc.data());

            setHistory(historyData); // ✅ Now history is set properly

            setHistory(historyData);
        } catch (error) {
            console.error("Error fetching history:", error);
        }
    };

    return (
        <div id="main">
            <div className="sidebar">
                <ul>
                    <li><Link to="/home">
                        Home
                    </Link></li>
                    <li><a href="#history" onClick={(e) => {
                e.preventDefault();
                document.getElementById("history").scrollIntoView({ behavior: "smooth" });
            }}>History</a></li>
                    
                    {/* <li><a href="./components/Signup/Signup.js">Logout</a></li> */}
                 
                    <li><Link to="/signup">
                        Log Out
                    </Link></li>
                </ul>
            </div>

            <div className="main-content">
                <div className="main-content">
                    <div className="profile-info">
                        {/* Profile Photo */}
                        <div className="profile-photo-container">
                                <i class="fa-solid fa-user"></i>
                        </div>

                        {/* Username */}
                        <h2>{userData ? userData.username : "Username"}</h2>

                        {/* Email */}
                        <p>{userData ? userData.email : "user@example.com"}</p>
                    </div>
                </div>

            </div>

                <div className="history">
                    <h2>History Of User</h2>
                    <p>This is the history section where relevant content will be displayed.</p>
                </div>
            </div>

    );
};

export default Profile;
