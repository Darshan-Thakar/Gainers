import UserContext from "./UserContext";
import { useState } from "react";


const UserState=(props)=>{
const host="http://localhost:8000"
const  [User, setUser] = useState({});
const [Loading, setLoading] = useState(true);

const getCurrentUser=async()=>{
    setLoading(true);
    const response=await fetch(`${host}/auth/getUser`,{
        headers:{
           "Auth-Token":localStorage.getItem("token")
        },

    })

    const parsedResponse=await response.json();
console.log(parsedResponse)
    setUser(parsedResponse);
    setLoading(false);
}


    return(
<UserContext.Provider value={{user:User, getCurrentUser:getCurrentUser,loading:Loading}}>
       { props.children}
 </UserContext.Provider>

    )
}

export default UserState;