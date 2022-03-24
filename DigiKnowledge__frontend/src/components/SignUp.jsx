import React,{useState} from 'react'
import "../components__Styling/SignUp.css"
import userAuth from '../helpers/userAuth'
import {useHistory} from "react-router-dom"

function SignUp() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Username, setUsername] = useState("");
    const history=useHistory();
    const signUp=async(e)=>{
        try {
            e.preventDefault()
            const body={
                name:Username,
                email:Email,
                password:Password
            }
 
     const success=await  userAuth("createUser",body);
     if(success===true){
         history.push("/home");
     }
   
       
        } catch (error) {
            alert(error)
            console.log(error)
        }
       
    }
    return (
        <div className="signUp">
            {localStorage.getItem("token")?history.push("/home"):null}
            <div className="signUp__logo">
                <h2>Gainers</h2>
            </div>
            <form className="signUp__modal" onSubmit={(e)=>signUp(e)}>
                <input id="signUp__username" type="text" placeholder="Enter the Username" value={Username}  onChange={(e)=>setUsername(e.target.value)} minLength={3} required/>
                <input id="signUp__email" type="email" placeholder="Enter the Email"  value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                <input id="signUp__password" type="password" placeholder="Enter the Password" value={Password}  onChange={(e)=>setPassword(e.target.value)} minLength={7} required/>
                <button className="signUp__button">SignUp</button>
            </form>
            <div className="or">
                <span>OR</span>
            </div>
          <div id="another__option">
              <a href="/login">Already have an account? Login </a>
          </div>
        </div>
       
    )
}

export default SignUp
