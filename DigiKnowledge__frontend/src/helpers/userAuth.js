

const host="http://localhost:8000"

const userAuth=async(method,body)=>{
    try {
      
     
        const body1=JSON.stringify(body);

        const result=await fetch(`${host}/auth/${method}`,{
            
            method:'POST',
            headers:{
                'Accept':"*/*",
                'Content-Type':'application/json'
            },
            body:body1,
        })
        console.log(result)
       const response=await result.json();
       console.log(response)
        if(response.success===true){
            alert("successful")
            localStorage.setItem("token",response.token)
             return true;
        }
        if(response.success===false){
            alert(response.error)
            return false;
        }
    } catch (error) {
     alert(error)   
     return false;
    }

}

export default userAuth