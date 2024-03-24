import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.todoForm}>
        <div className={styles.innerContainer}>
          <input
            className={styles.modernInput}
            type="text"
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            placeholder="Enter Todo Item"
            value={todo.name}
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
