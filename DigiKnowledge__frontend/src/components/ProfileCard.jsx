import React,{useEffect,useContext} from 'react'
import "../components__Styling/ProfileCard.css"
import {BrowserRouter as Router, Switch, Link,Route} from "react-router-dom"
import UserContext from '../context/UserContext'
import loader from "../assets/Spinner-2.gif"

function ProfileCard() {
const context = useContext(UserContext);
const {user,getCurrentUser,loading}=context;

useEffect(() => {
console.log(context);
getCurrentUser();
}, [])

    return (
        <div className="profile__card"> 
        {loading===true?
        <img src={loader} alt="Loading..."/>
        : 
        <>
            <div className="profile__top">
         <Link to="/profile"> <img id="profile__image" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /></Link>  
            </div>
          
            <div id="profile-user-info">
                <h2 id="user-name"> {user.user.name}</h2>
                <p id="user-bio">{user.user.bio}</p>

                <div className="user__profile__details">
                    <div className="user__followers">
                        <span>Followers</span>
                        <span>{user.user.followers}</span>
                    </div>
                    <div className="user__following">
                        <span>Following</span>
                        <span>{user.user.following}</span>
                    </div>
                    <div id="user__articles">
                        <span>Articles</span>
                        <span>{user.user.articles} </span>
                    </div>
                </div>
                <div className="profile__logout">
                  <button> <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vJDfShy9tZcrNJvEdItpeEhj2-g-hxvQIA&usqp=CAU" alt="" /> <span>Logout</span></button> 
                </div>
            </div>
            </>
}
        </div>
    )
}

export default ProfileCard
