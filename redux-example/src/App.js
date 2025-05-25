import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {increment, decrement} from './redux/counterSlice';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    dispatch(increment());
  };

  const onDecrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={onIncrementHandler}>+</button>
      <button onClick={onDecrementHandler}>-</button>
    </div>
  );
}

export default App;
