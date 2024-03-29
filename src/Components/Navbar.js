import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { changeTheme } from "../Store/Actions/ThemeActions";

function Navbar() {

    // state == lang , cart , theme
    const language = useSelector((state) => state.language.lang)

    const theme = useSelector((state) => state.theme.theme)

        //change function 
        const dispatch = useDispatch()
        const changeMyTheme = () => {
            //dispatch action
            dispatch(changeTheme(theme == "Light" ? "Dark" : "Light"))
        }

    return (

        <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" to="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/class">Class Com</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/fun">Function Com</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/adduser">Add User</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/usersdata">Users Data</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">Users List</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                    {/* i need read data from store */}
                    {/* to get data from store we use hooks --> useSelector */}
                    <p className="nav-link">{language}</p>
                </li>
                <li className="nav-item">
                    {/* i need read data from store */}
                    {/* to get data from store we use hooks --> useSelector */}
                    <p className="nav-link">{theme}</p>
                </li>
                <li className="nav-item">
                    <button className="btn btn-info" onClick={() => changeMyTheme()}>Change Theme</button>
                </li>
               
            </ul>
            </div>
        </div>
</nav>
        </>
    )
}


export default Navbar;