
import React from "react";


class MyButton extends React.Component{


    constructor(props){
        super()
    }


    render(){

            return(
                <> 
                    <button style={{backgroundColor: "yellow"}}> {this.props.name}</button>
                </>
            )
    }

}



export default MyButton;
