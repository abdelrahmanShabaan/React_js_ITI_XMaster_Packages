import { combineReducers } from "redux";
import languageReducer from "./LangReducer";
import ThemeReducers from "./ThemeReducers";
import LoaderReducer from "./LoaderReducer";
import userReducer from "./UserReducer";



export default combineReducers({

    // but all reducers
    language : languageReducer,
    theme : ThemeReducers,
    loader: LoaderReducer,
    list : userReducer
})