import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import combineReducerss from "./Reducers/combineReducerss";



const mystore = createStore(combineReducerss , 
composeWithDevTools())

export default mystore;