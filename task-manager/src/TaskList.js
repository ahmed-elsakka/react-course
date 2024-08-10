function TaskList(props) {
  return (
    <ul>
      {props.tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        props.tasks.map((task, index) => {
          return (
            <li key={index} style={{textDecoration: task.completed ? 'line-through':'none'}}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => props.handleToggleComplete(index)}
              />
              {task.text}
              <button onClick={() => props.handleDeleteTask(index)}>
                Delete
              </button>
            </li>
          );
        })
      )}
    </ul>
  );
}

export default TaskList;
