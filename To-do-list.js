import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2>Simple To-Do List</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
        style={{ padding: "5px" }}
      />

      <button
        onClick={addTask}
        style={{ marginLeft: "10px", cursor: "pointer" }}
      >
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "8px" }}>
            {task.text}
            <button
              onClick={() => removeTask(task.id)}
              style={{
                marginLeft: "10px",
                color: "red",
                cursor: "pointer"
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
