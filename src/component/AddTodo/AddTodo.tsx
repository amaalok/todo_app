import React, { useState } from "react";
import classes from "./AddTodo.module.css";
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const todoChangeHandler = (event: any) => {
    setTodo(event.target.value);
  };
  const todoSubmit = (event: any) => {
    event.preventDefault();
    console.log(todo);
    setTodo("");
  };
  return (
    <div>
      <h1 className={classes.addTodo}>todos</h1>
      <form onSubmit={todoSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          onChange={todoChangeHandler}
          value={todo}
          className={classes.inputTodo}
        />
      </form>
      <p>{todo}</p>
    </div>
  );
};
export default AddTodo;
