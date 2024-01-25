
import React from "react";


class MyButton extends React.Component{


    constructor(props){
        super()
    }


    render(){

            return(
                <>
                    <button> {this.props.name}</button>
                </>
            )
    }

}



export default MyButton;
