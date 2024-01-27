import { useEffect, useState } from "react";



function AppFunctionComponent(){

    // define first variable 
    //  state setState
    const[name, setName] =  useState("ahmed") 
    const [info, setInfo] = useState({
        name: "ali" ,
        age :33,
        city : "6 th october"
    })


        //function change
       const changeInfo = () => {
            setInfo({
                //save same defualt
                ...info,
                name: "abdelrahman",
            }) 
        }

        // component did mount
        useEffect(() =>{
            console.log("compoenent did mount")
        },[])

        
        //component did update + listen what will change
        useEffect(() =>{
            console.log("compoenent did update")
        },[name , info])

        // component did unmount
        useEffect(() =>{
            return()=>{
                console.log("compoenent did unmount")
            }
        },[])

        
    // output
    return(
        <>
        <h1>I'm Function Component</h1>
        <p className="text-primary">my name is {name} </p>
        <h2> My name: {info.name}</h2>
        <h2> My age: {info.age}</h2>
        <h2> My city: {info.city}</h2>
        {/* first way to call function with arrow function */}
        <button className="btn btn-info" onClick={()=>changeInfo()}>Change </button>
        {/* oR we can use setFunction and pass parameter  */}
        <button className="btn btn-danger" onClick={() => setName("kamel")}>Change name</button>

        </>
    )

}


export default AppFunctionComponent;