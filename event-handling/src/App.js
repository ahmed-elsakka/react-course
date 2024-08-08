
import './App.css';
import Greeting from './Greeting';
import MyForm from './MyForm';

function App() {
  const handleClick = () => {
    console.log("Button was clicked");
  };

  return (
    <div className="App">
      <header className="App-header">
        <MyForm />
      </header>
    </div>
  );
}

export default App;
