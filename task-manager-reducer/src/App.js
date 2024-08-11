import logo from "./logo.svg";
import "./App.css";
import { TaskProvider } from "./TaskContext";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
