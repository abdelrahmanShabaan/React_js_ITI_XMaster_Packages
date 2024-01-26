import logo from './logo.svg';
import './App.css';
import AppClassComponent from './AppClassComponent';
import MyButton from './MyButton';
import MyTitle from './MyTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function App() {
  return (
    <div className="App"> 
      <h1>Hello News Page</h1>
      <Button variant="primary">Primary</Button>{' '}
      <Alert variant="info"> alert—check it out!</Alert>
      <AppClassComponent />
      <MyButton name="Hello from app component" color="red"/> 
      <MyTitle title= "I am from apps"/>
    </div> 
  );
}

export default App;
