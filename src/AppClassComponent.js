import React from "react";


class AppClassComponent extends React.Component{


    constructor(){
        console.log("hello constructor");
    // that's  make call for all components that i make extend from it
        super();
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
    

    render(){
        return(<h1>I'm class compntent</h1>)
        } 
 
}



export default AppClassComponent