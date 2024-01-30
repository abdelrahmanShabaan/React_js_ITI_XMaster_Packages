import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";



const mystore = createStore(combineReducers , 
composeWithDevTools())

export default mystore;