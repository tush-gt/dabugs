import "./Navbar.css";

function Navbar()
{
    return <div class="main_box">
        <input type="checkbox" id="check" />
        <div class="btn_one">
          <label for="check">
            <i class="fa-solid fa-bars"></i>
          </label>
        </div>
  
        <div class="sidebar_menu">
          <div class="logo">
            <a href="#">CarbonZero</a>
          </div>
  
          <div class="btn_two">
            <label for="check">
              <i class="fa-solid fa-xmark"></i>
            </label>
          </div>
  
          <div class="home">
            <ul>
              <li>
                <i class="fa-solid fa-house-chimney"></i>
                <a href="#">Home</a>
              </li>
              <li>
                <i class="fa-solid fa-calculator"></i>
                <a href="#">Calculator</a>
              </li>
              <li>
                <i class="fa-solid fa-circle-user"></i>
                <a href="#">My Profile</a>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <a href="#">Contact</a>
              </li>
              <li>
                <i class="fa-solid fa-d"></i>
                <a href="#">Developers</a>
              </li>
            </ul>
          </div>
  
          <div class="social_media">
            <ul>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </ul>
          </div>
        </div>
      </div>
}


export default Navbar;