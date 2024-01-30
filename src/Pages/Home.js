import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../Store/Actions/LangActions";


function Home() {

    
    // state == lang , cart , theme
    const lang = useSelector((state) => state.language.lang)
    // change data 
    const dispatch = useDispatch()
    const changeMyLang = () =>{
        //dispatch action with action name useDispatch
        dispatch(changeLanguage(lang === "EN" ? "AR" : "EN")) 
        
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