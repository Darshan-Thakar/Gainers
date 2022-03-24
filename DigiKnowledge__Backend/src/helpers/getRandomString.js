
const getRandomString=(length)=>{
let randomString='' ;
let characters="QWERTYUIOPASDFGHJKLMNBVCXZqwertyuiopasdfghjklzxcvbnm1234567890"

for(let i=1;i<=length; i++){
    let randCharacter=Math.floor(Math.random()*length);
    randomString+=characters.charAt(randCharacter);

}

return randomString;
}

module.exports=getRandomString