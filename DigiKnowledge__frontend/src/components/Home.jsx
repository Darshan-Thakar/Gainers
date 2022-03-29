import React from 'react'
import "../components__Styling/Home.css"
import ProfileCard from './ProfileCard'
import {useHistory} from "react-router-dom"
function Home() {
    const history=useHistory();
    return (
        <div className="home">
            {localStorage.getItem("token")?
            <>
         <div  id="left__side">
            <ProfileCard/>
         </div>
         <div id="middle__side">

         </div>
         </>
:   history.push("/login") }
        </div>
    )
}

export default Home
