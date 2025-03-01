import "./signup.css";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import db from "./Firebase";
import { ref, set } from "firebase/database";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Signup() {
  const [isLogin, setIsLogin] = useState(false); // Toggle between Login & Signup

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    
    const { firstName, lastName, email, password } = data;
  
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill out all fields before submitting.");
      return;
    }
  
    try {
      const auth = getAuth();
      
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Generate a unique ID for database storage
      await set(ref(db, `users/${user.uid}`), {
        firstName,
        lastName,
        email
      });
  
      alert("User registered successfully!");
      setData({ firstName: "", lastName: "", email: "", password: "" });
  
    } catch (error) {
      alert("Error: " + error.message);
    }
  }
  

  return (
    <div className="main-su">
    <div className="boxbox-su">
      <div className="form-box-su">
        <div className="register-container">
          {/* 🔹 Toggle Between Login & Signup */}
          <div className="top-su">
            {isLogin ? (
              <>
                <span>Don't have an account? </span>
                <a href="#" onClick={() => setIsLogin(false)}>Sign Up</a>
              </>
            ) : (
              <>
                <span>Have an account? </span>
                <a href="#" onClick={() => setIsLogin(true)}>Login</a>
              </>
            )}
          </div>

          {/* 🔹 Form Heading */}
          <header>{isLogin ? "Login" : "Sign Up"}</header>

          {/* 🔹 Form Fields */}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="two-forms">
                <div className="input-box">
                  <i><FaUser/></i>
                  <input type="text" name="firstName" placeholder="Firstname" value={data.firstName} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <i><FaUser/></i>
                  <input type="text" name="lastName" placeholder="Lastname" value={data.lastName} onChange={handleChange} required />
                </div>
              </div>
            )}

            <div className="input-box">
              <i><FaEnvelope /></i>
              <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} required />
            </div>

            <div className="input-box">
              <i><FaLock /></i>
              <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} required />
              
            </div>
            <div className="register-su"><button type="submit" className="submit-su">
              {isLogin ? "Login" : "Register"}
              </button></div>

            
            
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;
