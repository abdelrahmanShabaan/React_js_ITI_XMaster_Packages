import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";




function UserDetails() {


            //SAVE THE USER ID From Use params
                const userId = useParams();
                //console.log(userId);
            const [userInfo , setUserInfo] = useState({})

                //useEffect to loop in the data
                useEffect((users)=> {
                    //then axios
                    axios(`https://retoolapi.dev/rPDRQU/data/${userId.id}`)
                    .then((res) => {setUserInfo(res) })
                    .catch((err) => {console.log(err)})

                },[])

                



            return(

                <>
                    
                <h1 className="text-center text-primary">Users Detail</h1>



                
                </>
            )

}


export default UserDetails;