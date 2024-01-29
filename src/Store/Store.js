import { createStore } from "redux";
import languageReducer from "./Reducer";



const mystore = createStore(languageReducer)

export default mystore;