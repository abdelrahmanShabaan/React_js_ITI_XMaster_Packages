import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { changeLoader } from "../Store/Actions/LoaderAction";
import { getUsersList } from "../Store/Actions/UsersListAction";
import Loader from "../Components/LoaderComponent";





function UsersList(){

    //when the page is load --> Call Api --> life Cycle
    // method ----> didMount --->useEffect 
    //promises --->resolve reject

    // const [users, setUsers] = useState([])

    // //loader
    //  const isLoading = useSelector((state) => state.loader.isLoading)

        //get data
            const users = useSelector((state) => state.list.users)
            const dispatch = useDispatch()
            useEffect(() =>  {
                dispatch(getUsersList())
                    
            },[])

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
                {isLoading ? (<Loader />) : (
                         users.map((user) => {
                            return (
                            <div className="container" key={user.id}>
                               <Link to={`/user/${user.id}`}> <li className="text-info"> {user.id} </li> </Link>
                                <li> {user.col1}  </li>
                            </div>
            
                                )
                            })
                )}
 */}


                {users.map((user, index) => {
                return (
                <div className="container">
                   <Link to={`/user/${user.id}`}> <li className="text-info"> {user.id} </li> </Link>
                    <li> {user.col1}  </li>
                </div>

                    )
                })}
      
        
        </>
    )
}

export default UsersList;