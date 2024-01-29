//type (name)
//payload 


export const changeLanguage = (payload) =>{
    return {
            type: "CHANGE_LANG",
            payload
    }
}

export const changeTheme = (payload) =>{
    return {
            type: "CHANGE_THEME",
            payload
    }
}