import React,{useState} from 'react'
import "../components__Styling/Login.css"
import userAuth from '../helpers/userAuth';
import {useHistory} from "react-router-dom"

function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const history=useHistory();
    const handleLoginSubmit=async(e)=>{
        try {
            e.preventDefault();
        
            const success=await userAuth("login",{email:Email,password:Password});
          
            if(success===true){
         history.push("/home")
            }

        } catch (error) {
            alert(error)
        }
     
    }
    return (
        <div className="login"> 
        {localStorage.getItem("token")&&history.push( "/home" )}
            <div className="login__logo">
                <h2>Gainers</h2>
                
             
            </div>

            <form className="login__modal" onSubmit={(e)=>handleLoginSubmit(e)} autoComplete="off">
                
                <input className="email__input" type="email" value={Email} placeholder="Enter the Email"  onChange={(e)=>setEmail(e.target.value)} required/>
                <input className="password__input" type="password" value={Password} placeholder="Enter the Password" onChange={(e)=>setPassword(e.target.value)} required/>
                <button className="login__button">Login</button>
            </form>
            <div className="another__option__divider">
                <span>OR</span>
            </div>
            <div className="login__options">
           
                <button className="google__SignIn__button"> Sign In with google  </button>
                <a href="/">New to Gainers ? Sign up</a>
            </div>
        </div>
    )
}

export default Login
