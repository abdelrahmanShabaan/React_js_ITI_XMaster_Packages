import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../Store/Action";


function Home() {

    
    // state == lang , cart , theme
    const lang = useSelector((state) => state.lang)
    // change data 
    const dispatch = useDispatch()
    const changeMyLang = () =>{
        //dispatch action with action name useDispatch
        dispatch(changeLanguage("AR")) 
        
    }
        return(

            <>
                <h1 className="text-danger">My language : {lang}</h1>
                <h1 className="text-danger">Home page</h1>
                <button className="btn btn-primary" onClick={() => changeMyLang()}>Change Lang</button>
            </>
        )

}

export default Home;