import "./Navbar.css";

function Navbar()
{
    return <div className="main_box">
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
                <i className="fa-solid fa-house-chimney"></i>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <i className="fa-solid fa-calculator"></i>
                <a href="#">Calculator</a>
              </li>
              <li>
                <i className="fa-solid fa-circle-user"></i>
                <a href="#">My Profile</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="#">Contact</a>
              </li>
              <li>
                <i className="fa-solid fa-d"></i>
                <a href="#">Developers</a>
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
}


export default Navbar;