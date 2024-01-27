import axios from "axios";
import { useEffect, useState } from "react";





function UsersList(){

    //when the page is load --> Call Api --> life Cycle
    // method ----> didMount --->useEffect 
    //promises --->resolve reject

    const [users, setUsers] = useState([])

    useEffect(() => {
            axios.get("https://retoolapi.dev/rPDRQU/data")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err))
        },[])


    return(
        <>
         <h1 className="text-center text-primary">Users List</h1>

         {users.map(user => {
            return (
                <div className="container">
                    <li className="text-info"> {user.id} </li>
                    <li> {user.col1}  </li>
                </div>

            )
         })}
        
        </>
    )
}

export default UsersList;