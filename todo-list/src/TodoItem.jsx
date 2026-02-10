import { MdOutlineCancel } from "react-icons/md";
import "./App.css";
import { useState } from "react";

export function TodoItem({ item, setTodos, todos }) {
  const [flag, setFlag] = useState(false);

  function handleCheckboxClick() {
    setFlag(!flag);
  }

  function handleDelete() {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  }
  return (
    <tr className="todoItem">
      <td className="checkboxdiv">
        <label className="checkbox">
          <input type="checkbox" onClick={handleCheckboxClick} />
          <span className="checkmark"></span>
        </label>
      </td>
      <td className="name">
        <p
          style={
            flag
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {item.name}
        </p>
      </td>
      <td className="delete">
        <button onClick={handleDelete}>
          <MdOutlineCancel />
        </button>
      </td>
    </tr>
  );
}
