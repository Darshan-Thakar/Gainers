import React from 'react'
import "../components__Styling/Navbar.css"
import Notification from "../assets/Notification/NotificationImg.png"
import AccImg from "../assets/AccountImg.png"
import {BrowserRouter as Router, Switch, Link,Route} from "react-router-dom"
function Navbar() {
    return (
      <nav id="Navbar">
          <div id="nav__logo">
              <h2>Gainers</h2>
          </div>
          <div id="navbar__search__box">
             <input id="navbar__search__field" type="text" placeholder="Search questions..."  />
             <img src="" alt="g" />
          </div>
          <ui id="navbar__options">
              <li> <button>Ask a Question</button></li>
              <li><Link to="/chat/inbox" style={{textDecoration:'none',color:"black", display:"flex" , flexDirection:"column",alignItems:'center', justifyContent:'center'}}><img src="" alt="" /><span>Chat</span></Link></li>
              <li><Link to="/people" style={{textDecoration:'none',color:"black", display:"flex" , flexDirection:"column",alignItems:'center', justifyContent:'center'}}><img src="" alt="" /><span>People</span></Link></li>
              <li><Link to="/notifications" style={{textDecoration:'none',color:"black", display:"flex" , flexDirection:"column",alignItems:'center', justifyContent:'center'}}><img src="https://cdn.iconscout.com/icon/free/png-256/notifications-1782396-1512416.png" alt="" /> <span>Notifications</span></Link></li>
              <li><Link to="/profile" style={{textDecoration:'none',color:"black", display:"flex" , flexDirection:"column",alignItems:'center', justifyContent:'center'}}><img src="https://cdn.iconscout.com/icon/free/png-256/account-269-866236.png" alt="" /> <span>Profile</span></Link> </li>
          </ui>
      </nav>
    )
}

export default Navbar
