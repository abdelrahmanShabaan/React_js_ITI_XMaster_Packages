import { useState } from "react";



function AppFunctionComponent(){

    // define first variable 
    //  state setState
    const[name, setName] =  useState("ahmed") 

    return(
        <>
        <h1>I'm Function Component</h1>
        <p>my name is {name} </p>
        </>
    )

}


export default AppFunctionComponent;