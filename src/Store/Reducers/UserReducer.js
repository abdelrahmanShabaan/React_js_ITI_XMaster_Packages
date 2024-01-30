
const INITIAL_VALUE = {
    users: []
}

export default function userReducer 
(state=INITIAL_VALUE, action) {

    switch(action.type){
        case 'GET_USERS':
            return{
                ...state, //everything
                users: action.payload
            }

            default: 
            return state
    }
}

