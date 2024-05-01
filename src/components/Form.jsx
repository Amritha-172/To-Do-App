import { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.name.trim()) {
      setError("Plase enter a todo items");
      return;
    }
    if (todos.some((item) => item.name === todo.name)) {
      setError("Item already exists");
      setTodo({ name: "", done: false });
      return;
    }

    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    setError("");
  }
  return (
    <div>
      <form className={style.todoform} onSubmit={handleSubmit}>
        {error && <p className={style.error}>{error}</p>}
        <div className={style.inputContainer}>
          {" "}
          <input
            className={style.modernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="Enter Todo items..."
          />
          <button className={style.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
