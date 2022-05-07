import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import classes from "./AddTodo.module.css";
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todoChangeHandler = (event: any) => {
    setTodo(event.target.value);
  };
  const todoSubmit = (event: any) => {
    event.preventDefault();
    if (todo.trim().length === 0) {
      alert("Task cannot be empty");
      setTodo("");
      return;
    }
    dispatch(
      addTodo({
        todo: todo,
      })
    );
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
