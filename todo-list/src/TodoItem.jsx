import { MdOutlineCancel } from "react-icons/md";
import "./App.css";
import { useState } from "react";
import React from "react";

export function TodoItem({ item, setTodos, todos }) {
  function handleCheckboxClick() {
    setTodos(
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function handleDelete() {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  }
  return (
    <tr className="todoItem">
      <td className="checkboxdiv">
        <label className="checkbox">
          <input
            type="checkbox"
            onClick={handleCheckboxClick}
            checked={item.done}
          />
          <span className="checkmark"></span>
        </label>
      </td>
      <td className="name">
        <p
          style={
            item.done
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {item.name}
        </p>
      </td>
      <td className="delete">
        <button aria-label={`delete ${item.name}`} onClick={handleDelete}>
          <MdOutlineCancel />
        </button>
      </td>
    </tr>
  );
}
