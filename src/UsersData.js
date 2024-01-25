import React from "react";
import MyButton from "./MyButton";



class UsersData extends React.Component{


        constructor(){
            super();
            this.state = {
                title: "Hello React"
            }
        }
        
        render(){
            return(
                <>
                     <h1 className="text-danger text center"> {this.state.title} </h1>
                     <MyButton  color="green" name="i am user compontent"/>
                </>
            )
        }
}

export default UsersData;