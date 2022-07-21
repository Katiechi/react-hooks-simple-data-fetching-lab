// create your App component here
import React, {useState, useEffect} from  "react";

function App(){
    const [displayDog, setDisplayDog] = useState(null)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data.message)
        setDisplayDog(data.message)
    })
    },[])

    if(!displayDog) return <p>"Loading..."</p>
    console.log(displayDog)
return (
   
     
       <img src={displayDog} alt="A Random Dog"/>
       
       

)

}

export default App;