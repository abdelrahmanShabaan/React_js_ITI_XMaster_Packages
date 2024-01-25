import logo from './logo.svg';
import './App.css';
import AppClassComponent from './AppClassComponent';
import MyButton from './MyButton';

function App() {
  return (
    <div className="App"> 
      <h1>Hello News Page</h1>
      <AppClassComponent />
      <MyButton name="Hello from app component"/> 
    </div> 
  );
}

export default App;
