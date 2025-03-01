import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Import Firebase config
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchProfile();
        fetchHistory();
    }, []);

    // Fetch Profile Data
    const fetchProfile = async () => {
        try {
            const userRef = collection(db, "users"); // Adjust collection name if needed
            const snapshot = await getDocs(userRef);
            if (!snapshot.empty) {
                const userInfo = snapshot.docs[0].data(); // Assuming single user record
                setUserData(userInfo);
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
            setHistory(historyData);
        } catch (error) {
            console.error("Error fetching history:", error);
        }
    };

    return (
        <div className="profile-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="profile-section">
                    <img src={userData?.photoURL || "profile/profile.jpg"} alt="Profile" className="profile-photo" />
                    <div className="profile-name">{userData?.name || "John Doe"}</div>
                </div>

                {/* History Section */}
                <div className="history">
                    <h4>History</h4>
                    {history.length > 0 ? (
                        history.map((item, index) => (
                            <div key={index} className="history-item">
                                {item.activity}
                            </div>
                        ))
                    ) : (
                        <p>No history found.</p>
                    )}
                </div>

                {/* Navigation */}
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h2>Welcome {userData?.name || "User"}</h2>
                <p>Your dashboard content goes here.</p>
            </div>
        </div>
    );
};

export default Profile;
