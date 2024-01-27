import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './AppUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import AppClassComponent from './Pages/AppClassComponent';
import AppFunctionComponent from './Pages/AppFunctionComponent';
import UsersData from './Pages/UsersData';
import Home from './Pages/Home';

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
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/class"} component={AppClassComponent} />
      <Route path={"/fun"} component={AppFunctionComponent} />
      <Route path={"/adduser"} component={AddUser} />
      <Route path={"/users"} component={UsersData} />
      </Switch>
      </BrowserRouter>

    </div> 
  );
}

export default App;
