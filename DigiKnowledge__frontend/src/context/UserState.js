import UserContext from "./UserContext";
import { useState } from "react";

const UserState=(props)=>{
const host="http://localhost:8000"


    return(
<UserContext.Provider value={ {hello:"hello"}}>
       { props.children}
 </UserContext.Provider>

    )
}

export default UserState;