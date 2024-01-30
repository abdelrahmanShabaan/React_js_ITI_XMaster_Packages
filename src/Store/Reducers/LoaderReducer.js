
const INITIAL_VALUE = {
    isLoading: "TRUE",
}

export default function LoaderReducer 
(state=INITIAL_VALUE, action) {

    switch(action.type){
        case 'CHANGE_LOADER':
            return{
                ...state, //everything
                isLoading: action.payload
            }

            default: 
            return state
    }
}

