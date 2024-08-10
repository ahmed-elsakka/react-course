import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      return i === index ? { ...task, completed: !task.completed } : task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => {
      return i !== index;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput
        handleAddTask={handleAddTask}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <TaskList
        tasks={tasks}
        handleToggleComplete={handleToggleComplete}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
