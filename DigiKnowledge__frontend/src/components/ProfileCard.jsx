import React from 'react'
import "../components__Styling/ProfileCard.css"
import {BrowserRouter as Router, Switch, Link,Route} from "react-router-dom"
function ProfileCard() {
    return (
        <div className="profile__card"> 
            <div className="profile__top">
         <Link to="/profile"> <img id="profile__image" src="		https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /></Link>  
            </div>
          
            <div id="profile-user-info">
                <h2 id="user-name">Darshan Thakar</h2>
                
                <p id="user-bio">I am darshan thakar a software developer from india and i am currently learning machine learning</p>

                <div className="user__profile__details">
                    <div className="user__followers">
                        <span>Followers</span>
                        <span>567</span>
                    </div>
                    <div className="user__following">
                        <span>Following</span>
                        <span>247</span>
                    </div>
                    <div id="user__articles">
                        <span>Articles</span>
                        <span>123 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
