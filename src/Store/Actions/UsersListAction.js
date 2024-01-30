import axios from "axios"
import { axiosInstance } from "../../Networking/axiosInstance"


//call api ==> Axios
export const getUsersList = (data) => (dispatch) =>{

    return  axiosInstance.get("data")
    .then((res) => {
                //WHEN BACK RES
                dispatch({
                    type : "GET_USERS",
                    payload : res.data
                })
        
    })
    .catch((err) => console.log(err))
}
