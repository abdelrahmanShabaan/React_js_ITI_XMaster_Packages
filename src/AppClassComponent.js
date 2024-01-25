import React from "react";
import MyButton from "./MyButton";
import MyTitle from "./MyTitle";


class AppClassComponent extends React.Component{


    constructor(){
        console.log("hello constructor");
    // that's  make call for all components that i make extend from it
        super();

        this.state =
        {
            //define variables
                name: "ali",
                age : 20,
                position: "developer"
        }
    }


        componentDidMount(){
            // when load class like constructor 
            // document.ready (best example to use APIS)
            console.log("I am component Did Mount");
        }

        componentDidUpdate(){
            // when load class like constructor 
            //calling when make change in component
            console.log("I am component Did Update ");
        }

        componentWillUnmount(){
            // when load class like constructor 
            //when i move from page to another
            console.log("I will be Removed soon!");
        }


        changeUserInfo = ()=> {
            this.setState ({
                name:"Abdelrahman",
                age : 26,
                position : "software developer"
            })
        }

    
    //every once repeat again
    render()
    {
    return(
        //fregement elements
        <>
            {/* way to write style {{  }} */}
        <h1 style={{color:'red'}}>I am class compnent</h1>
        <h2>name : {this.state.name} </h2>
        <h3>age : {this.state.age} </h3>
        <button onClick={()=> this.changeUserInfo()} >change User </button>
        <MyButton name="Hello from class comp" color="green"/>

        <MyTitle title= "I am from class "/> 
        </>
    )

    } 
 

}



export default AppClassComponent