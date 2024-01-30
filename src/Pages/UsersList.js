import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { changeLoader } from "../Store/Actions/LoaderAction";





function UsersList(){

    //when the page is load --> Call Api --> life Cycle
    // method ----> didMount --->useEffect 
    //promises --->resolve reject

    // const [users, setUsers] = useState([])

    // //loader
    // const loader = useSelector((state) => state.loader.isLoading)

        //get data
            const users = useSelector((state) => state.list.users)


    // //dispatcher
    // const dispatch = useDispatch()
    
    // useEffect(() => {
    //         axios.get("https://retoolapi.dev/rPDRQU/data")
    //         .then((res) => {
                
    //             setUsers(res.data)
    //             dispatch(changeLoader(false))
                
    //         })
    //         .catch((err) => console.log(err))
    //     },[])






    return(
        <>
         <h1 className="text-center text-primary">Users List</h1>


         {/* loader */}
{/* 
                {loader ? (<loader />) : (<ul>

                {users.map((user, index) => {
                return (
                <div className="container">
                   <Link to={`/user/${user.id}`}> <li className="text-info"> {user.id} </li> </Link>
                    <li> {user.col1}  </li>
                </div>

                    )
                })}

                </ul>)} */}


      
        
        </>
    )
}

export default UsersList;