import React from "react";
import MyButton from "../Components/MyButton";



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
                     <MyButton  color="green" name="i am users compontent"/>
                </>
            )
        }
}

export default UsersData;