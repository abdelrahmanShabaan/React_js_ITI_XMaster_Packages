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
            console.log("hello did");
        }

        componentDidUpdate(){
            // when load class like constructor 
            console.log("hello update");
        }

        componentWillUnmount(){
            // when load class like constructor 
            console.log("hello mount");
        }
    

    render(){
        return(<h1>I'm class compntent</h1>)
        } 
 
}



export default AppClassComponent