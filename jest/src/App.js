import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting/Greeting';

function App() {
  const onClick = () => {
    alert("Button clicked!");
  }

  return (
    <div className="App">
      <h1>App Component</h1>
      <Greeting name = "Jest" onClick = {onClick}/>
    </div>
  );
}

export default App;
