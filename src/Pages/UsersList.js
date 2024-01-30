import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";





function UsersList(){

    //when the page is load --> Call Api --> life Cycle
    // method ----> didMount --->useEffect 
    //promises --->resolve reject

    const [users, setUsers] = useState([])

    //loader

    useEffect(() => {
            axios.get("https://retoolapi.dev/rPDRQU/data")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err))
        },[])


    return(
        <>
         <h1 className="text-center text-primary">Users List</h1>

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