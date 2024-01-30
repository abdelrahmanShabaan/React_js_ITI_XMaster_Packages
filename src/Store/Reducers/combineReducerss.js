import { combineReducers } from "redux";
import languageReducer from "./LangReducer";
import themeReducer from "./ThemeReducers";



export default combineReducers({

    // but all reducers
    language : languageReducer,
    theme : themeReducer
})