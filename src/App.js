import logo from './logo.svg';
import './App.css';
import AppClassComponent from './AppClassComponent';
import MyButton from './MyButton';
import MyTitle from './MyTitle';

function App() {
  return (
    <div className="App"> 
      <h1>Hello News Page</h1>
      <AppClassComponent />
      <MyButton name="Hello from app component" color="red"/> 
      <MyTitle title= "I am from apps"/>
    </div> 
  );
}

export default App;
