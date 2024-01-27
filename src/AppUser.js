import { useState } from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";



function AddUser(){


    //console.log(props history , location . match)
    //can work with params (props)  or Hooks 
        const location = useLocation();
        console.log(location);
        const history = useHistory();
        console.log(history);
        const match = useRouteMatch();
        console.log(match);
        const param = useParams();
        console.log(param);



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

            setError({
                ...errors,
                positionErr: e.target.value.length == 0 && "this Field is Required"
            })

           }
        } //end of function change with event


        //function submit
        const submitData = (e) => {
            e.preventDefault()
            if(!errors.nameError && !errors.positionErr){
            //prevent defualt
            console.log("forms added succssfully")

            //added history for home 
            //history.push("/") //hooks
            history.push("/");
        }   
    }



    return(
        <>
        <div className="container">
             <h1 className="text-primary text-center">Add User</h1>
            <form onSubmit={(e) => submitData(e)}>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" value={data.name} onChange={(e)=> changeData(e)} name="name"/>
            <p className="text-danger">{errors.nameError}</p>
            </div>

            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Position</label>
            <input type="text" className="form-control" value={data.position}  onChange={(e)=> changeData(e)}  name="postition"/>
            <p className="text-danger">{errors.positionErr}</p>
            </div>
            {/* added disable if found errors in variables */}
            <button disabled={errors.nameError || errors.positionErr} type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </>
    )

}


export default AddUser;