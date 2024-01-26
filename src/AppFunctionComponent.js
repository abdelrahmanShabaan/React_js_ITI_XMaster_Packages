import { useState } from "react";



function AppFunctionComponent(){

    // define first variable 
    //  state setState
    const[name, setName] =  useState("ahmed") 
    const [info, setInfo] = useState({
        name: "ali" ,
        age :33,
        city : "6 th october"
    })



    // output
    return(
        <>
        <h1>I'm Function Component</h1>
        <p className="text-primary">my name is {name} </p>
        <h2> My name: {info.name}</h2>
        <h2> My age: {info.age}</h2>
        <h2> My city: {info.city}</h2>
        </>
    )

}


export default AppFunctionComponent;