import { combineReducers } from "redux";
import languageReducer from "./LangReducer";
import ThemeReducers from "./ThemeReducers";



export default combineReducers({

    // but all reducers
    language : languageReducer,
    theme : ThemeReducers
})