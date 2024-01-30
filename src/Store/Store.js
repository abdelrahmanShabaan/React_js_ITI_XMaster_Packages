import { composeWithDevTools } from "redux-devtools-extension";
import combineReducerss, { combineReducers } from "./Reducers/combineReducerss";
import { createStore } from "redux";



const mystore = createStore(combineReducerss , 
composeWithDevTools())

export default mystore;