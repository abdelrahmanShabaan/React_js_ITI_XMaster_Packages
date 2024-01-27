import { useState } from "react";



function AddUser(){

        //define const to save come data from forms
        const[data, setData] = useState({
            name : "ali",
            position : "Developer"
        })


        // error msgs Vaildation save in constant and use ass variables here 
        const[errors , setError] = useState({
            nameError : "",
            positionErr: ""
        })


        //function listen change 
       const changeData= (e) => {

           if(e.target.name =="name"){
            setData({
                ...data,
                name: e.target.value
            })
            setError({
                ...errors,
                nameError: e.target.value.length == 0 ? "this Field is Required" :
                 e.target.value.length <3 && "please enter a vaild name"
            })

           }else{
            setData({
                ...data,
                position : e.target.value
            })
           }

            
        } 


    return(
        <>
        <div className="container">
             <h1 className="text-primary text-center">Add User</h1>
            <form>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" value={data.name} onChange={(e)=> changeData(e)} name="name"/>
            <p className="text-danger">{errors.nameError}</p>
            </div>

            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Position</label>
            <input type="text" className="form-control" value={data.position} name="postition"/>
            <p className="text-danger">{errors.positionErr}</p>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </>
    )

}


export default AddUser;