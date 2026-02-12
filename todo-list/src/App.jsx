import { useState } from "react";
import { TodoItem } from "./TodoItem";
import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "first todo", done: false },
    { id: uuidv4(), name: "second todo", done: false },
    { id: uuidv4(), name: "third todo", done: false },
  ]);

  const [todoName, setTodoName] = useState("");
  const [filter, setFilter] = useState("all");

  function handleAdd() {
    if (todoName.trim() === "") return;

    const newTodo = {
      id: uuidv4(),
      name: todoName,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTodoName("");
  }

  // derive filtered todos instead of mutating state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  const list = filteredTodos.map((todo) => (
    <TodoItem item={todo} setTodos={setTodos} todos={todos} key={todo.id} />
  ));

  return (
    <div className="app">
      <div className="inputdiv">
        <input
          type="text"
          value={todoName}
          placeholder="insert new Todo"
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button onClick={handleAdd}>add</button>
      </div>

      <nav className="filterdiv">
        <input
          type="radio"
          name="filter"
          id="all"
          checked={filter === "all"}
          onChange={() => setFilter("all")}
        />
        <label htmlFor="all">All</label>

        <input
          type="radio"
          name="filter"
          id="active"
          checked={filter === "active"}
          onChange={() => setFilter("active")}
        />
        <label htmlFor="active">Active</label>

        <input
          type="radio"
          name="filter"
          id="completed"
          checked={filter === "completed"}
          onChange={() => setFilter("completed")}
        />
        <label htmlFor="completed">Completed</label>
      </nav>

      <table>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
}

export default App;
