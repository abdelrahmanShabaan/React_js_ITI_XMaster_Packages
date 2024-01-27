import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './AppUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import AppClassComponent from './Pages/AppClassComponent';
import AppFunctionComponent from './Pages/AppFunctionComponent';
import UsersData from './Pages/UsersData';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
import UsersList from './Pages/UsersList';
import UserDetails from './Pages/UserDetails';
import Blogs from './Pages/Blogs';

function App() {


  return (
    <div> 
     {/* <h1>Hello News Page</h1>
       <Button variant="primary">Primary</Button>{' '}
      <Alert variant="info"> alert—check it out!</Alert>
      <AppClassComponent />
      <MyButton name="Hello from app component" color="red"/> 
      <MyTitle title= "I am from apps"/>
      <AppFunctionComponent /> */}
      {/* <AddUser /> */}


   
      <BrowserRouter>
      <Navbar /> 
      <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/class"} component={AppClassComponent} />
      <Route exact path={"/fun"} component={AppFunctionComponent} />
      <Route exact path={"/adduser/:id"} component={AddUser} />
      <Route exact path={"/users"} component={UsersList} />
      <Route exact path={"/userslist"} component={UsersData} />
      <Route exact path={"/user/:id"} component={UserDetails} />
      <Route exact path={"/blogs"} component={Blogs} />


      <Route exact path={"*"} component={NotFound}/>
      </Switch>
      </BrowserRouter>

    </div> 
  );
}

export default App;
