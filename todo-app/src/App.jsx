import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [
      { id: 1, text: "APTITUDE", completed: false },
      { id: 2, text: "LOGIC BUILD", completed: false },
      { id: 3, text: "PATTERN LOGIC", completed: false },
      { id: 4, text: "LEET CODE", completed: false },
      { id: 5, text: "MCP PROJECT", completed: false },
      { id: 6, text: "RAG", completed: false },
      { id: 7, text: "DATA INTERPRETATION", completed: false },
      { id: 8, text: "Predictive Intelligence and Decision Systems", completed: false },
      { id: 9, text: "SEMINAR TOPIC ", completed: false },
      { id: 10, text: "RBL", completed: false },
      { id: 11, text: "MOCK INTEVIEW ", completed: false },
      { id: 12, text: "PROJECT USE CASE ", completed: false },
      { id: 13, text: "DATA SCIENCE TOPIC INSHORT", completed: false }
    ];
  });

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo() {
    if (inputValue.trim() === "") return;
    const newTodo = { id: Date.now(), text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleToggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleStartEdit(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }

  function handleSaveEdit(id) {
    if (editText.trim() === "") return;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText("");
  }

  function handleCancelEdit() {
    setEditingId(null);
    setEditText("");
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>My Todo List</h1>

      <div className="input-row">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSaveEdit(todo.id)}
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
                <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
                  {todo.text}
                </span>
                <button onClick={() => handleStartEdit(todo)}>Edit</button>
                <button className="delete" onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;