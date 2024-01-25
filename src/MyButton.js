
import React from "react";


class MyButton extends React.Component{


    constructor(props){
        super()
    }


    render(){

            return(
                <> 
                    <button style={{backgroundColor: this.props.color}}> {this.props.name}</button>
                </>
            )
    }

}



export default MyButton;
