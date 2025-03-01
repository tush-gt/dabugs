import React, { useEffect, useState } from "react";
import db from "./Firebase";
import { query, orderBy, limit, getDocs, collection, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
        } catch (error) {
            console.error("Error fetching history:", error);
        }
    };

    return (
        <div id="main">
            <div className="sidebar">
                <ul>
                    <li><a href="./components/Home.js">Home</a></li>
                    <li><a href="#history" onClick={(e) => {
                e.preventDefault();
                document.getElementById("history").scrollIntoView({ behavior: "smooth" });
            }}>History</a></li>
            
                    <li><a href="./components/Signup/Signup.js">Logout</a></li>
                </ul>
            </div>

            <div className="main-content">
            <div className="main-content">
    <div className="profile-info">
        {/* Profile Photo */}
        <div className="profile-photo-container">
            <img 
                src="./profile.jpg" 
                
                className="profile-photo"
            />
        </div>

        {/* Username */}
        <h2>{userData ? userData.username : "Username"}</h2>

        {/* Email */}
        <p>{userData ? userData.email : "user@example.com"}</p>
    </div>
</div>

                </div>

                <div id="history" style={{padding: "20px", background: "#f0f0f0", borderRadius: "10px", textAlign: "center" }}>
                    <h2>History Of User</h2>
                    <p>This is the history section where relevant content will be displayed.</p>
                </div>
            </div>
    );
};

export default Profile;
