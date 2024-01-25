import React from "react";


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
    
    //every once repeat again
    render()
    {
    return(
        //fregement elements
        <>
        <h1>I am class compnent</h1>
        <h2>name :</h2>
        <h3>age :</h3>
        </>
    )

    } 
 

}



export default AppClassComponent