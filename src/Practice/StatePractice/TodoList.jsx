import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [allTask, setAllTask] = useState([]);

  const enterTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "") return;
    setAllTask([...allTask, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const UpdateTaskList = allTask.filter((_, i) => {
      return i !== index;
    });
    setAllTask(UpdateTaskList);
  };
  return (
    <div>
      <input
        type="text"
        value={task}
        placeholder="Enter your Todos Here...."
        onChange={enterTask}
      />
      <button onClick={addTask} style={{ marginLeft: "20px" }}>
        Add Task
      </button>
      <p>{task}</p>
      <ol>
        {allTask.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "green",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <li style={{ color: "white", fontSize: "18px", marginTop: "30px" }}>
              {item}
            </li>
            <button onClick={() => deleteTask(index)}>Delete Task</button>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
