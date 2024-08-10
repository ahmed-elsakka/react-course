function TaskInput(props) {
  return (
    <div>
      <input
        type="text"
        value={props.newTask}
        onChange={(e) => props.setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={props.handleAddTask}>Add task</button>
    </div>
  );
}

export default TaskInput;
