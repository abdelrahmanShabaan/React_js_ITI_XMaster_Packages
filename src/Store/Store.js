import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import combineReducerss from "./Reducers/combineReducerss";
import { thunk } from "redux-thunk";



const mystore = createStore(combineReducerss , 
composeWithDevTools(thunk))

export default mystore;