import React from 'react'
import "../components__Styling/Navbar.css"
import Notification from "../assets/Notification/NotificationImg.png"
import AccImg from "../assets/AccountImg.png"
function Navbar() {
    return (
      <nav id="Navbar">
          <div id="nav__logo">
              <h2>Gainers</h2>
          </div>
          <div id="navbar__search__box">
             <input id="navbar__search__field" type="text" placeholder="Search answers..."  />
             <img src="" alt="g" />
          </div>
          <ui id="navbar__options">
              <li> <button>Ask a Question</button></li>
              <li><img src="https://cdn.iconscout.com/icon/free/png-256/notifications-1782396-1512416.png" alt="" /> <span>Notification</span></li>
              <li><img src="https://cdn.iconscout.com/icon/free/png-256/account-269-866236.png" alt="" /> <span>Profile</span></li>
          </ui>
      </nav>
    )
}

export default Navbar
