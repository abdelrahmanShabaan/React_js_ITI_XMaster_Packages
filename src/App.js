import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './AppUser';

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
      <AddUser />
    </div> 
  );
}

export default App;
