import axios from "axios"


//call api ==> Axios
export const getUsersList = (data) => (dispatch) =>{

    return  axios.get("https://retoolapi.dev/rPDRQU/data")
    .then((res) => {
                //WHEN BACK RES
                dispatch({
                    type : "GET_USERS",
                    payload : res.data
                })
        
    })
    .catch((err) => console.log(err))
}
