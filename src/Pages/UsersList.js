import axios from "axios";
import { useEffect } from "react";





function UsersList(){

    //when the page is load --> Call Api --> life Cycle
    // method ----> didMount --->useEffect 
    //promises --->resolve reject
    useEffect(() => {

            //axios.
            //get 
            //put 
            //delete 
            axios.get("https://retoolapi.dev/2w0eRR/data").
            then((res) => console.log(res))
            .catch((err) => console.log(err))
        },[])


    return(
        <>
         <h1 className="text-center text-primary">Users List</h1>
        
        </>
    )
}

export default UsersList;