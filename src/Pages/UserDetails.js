import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Cart from "../Components/Cart";




function UserDetails() {


            //SAVE THE USER ID From Use params
                const userId = useParams();
                //console.log(userId);
            const [userInfo , setUserInfo] = useState({})

                //useEffect to loop in the data
                useEffect(()=> {
                    //then axios
                    axios(`https://retoolapi.dev/rPDRQU/data/${userId.id}`)
                    .then((res) => {setUserInfo(res.data) })
                    .catch((err) => {console.log(err)})

                },[])

                



            return(

                <>
                    <div className="container">
                <h1 className="text-center text-primary">Users Detail</h1>
                <Cart name={userInfo.fullName} email={userInfo.col1}/>

                </div>
                
                </>
            )

}


export default UserDetails;