
const INITIAL_VALUE = {
    lang: "EN",
    theme: "Dark",
    cart :0
}

export default function languageReducer 
(state=INITIAL_VALUE, action) {

    switch(action.type){
        case 'CHANGE_LANG':
            return{
                ...state, //everything
                lang: action.payload
            }

            default: 
            return state
    }
}

