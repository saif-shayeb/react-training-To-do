import { useState } from "react";
import { TodoItem } from "./TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "first todo", done: false },
    { id: 2, name: "second todo", done: false },
    { id: 3, name: "third todo", done: false },
  ]);
  const [todoName, setTodoName] = useState("");
  function handleAdd() {
    if (todoName.trim() === "") {
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      name: todoName,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setTodoName("");
  }
  const list = todos.map((todo) => (
    <TodoItem item={todo} setTodos={setTodos} todos={todos} />
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
      <table>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
}

export default App;
