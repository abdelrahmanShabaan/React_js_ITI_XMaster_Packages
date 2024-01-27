import { useState } from "react";



function AddUser(){

        //define const to save come data from forms
        const[data, setData] = useState({
            name : "ali",
            position : "Developer"
        })

        //function listen change 
       const changeData= (e) => {

           if(e.target.name =="name"){
            setData({
                ...data,
                name: e.target.value
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
            </div>

            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Position</label>
            <input type="text" className="form-control" value={data.position} name="postition"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </>
    )

}


export default AddUser;