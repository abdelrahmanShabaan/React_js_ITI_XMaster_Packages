
const INITIAL_VALUE = {
    loader: "TRUE",
}

export default function LoaderReducer 
(state=INITIAL_VALUE, action) {

    switch(action.type){
        case 'CHANGE_LOADER':
            return{
                ...state, //everything
                loader: action.payload
            }

            default: 
            return state
    }
}

