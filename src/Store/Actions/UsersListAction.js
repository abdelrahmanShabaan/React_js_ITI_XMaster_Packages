import axios from "axios"


//call api ==> Axios
export const getUsersList = (data) => (dispatch) =>{

    
    return  axios.get("https://retoolapi.dev/rPDRQU/data")

}
