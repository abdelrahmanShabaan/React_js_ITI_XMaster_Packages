import { combineReducers } from "redux";
import languageReducer from "./LangReducer";



export default combineReducers({

    // but all reducers
    language : languageReducer,


})