import { createStore } from "redux";
import languageReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";



const mystore = createStore(languageReducer , composeWithDevTools)

export default mystore;