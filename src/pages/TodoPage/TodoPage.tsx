import React from "react";
import { useNavigate } from "react-router-dom";
import AddTodo from "../../component/AddTodo/AddTodo";
import TodoList from "../../component/TodoList/TodoList";
import classes from "./TodoPage.module.css";

function TodoPage() {
  let navigate = useNavigate();
  return (
    <div>
      <AddTodo />
      <TodoList />
      <button
        className={classes.btn}
        onClick={() => {
          navigate("/news");
        }}
      >
        News
      </button>
    </div>
  );
}

export default TodoPage;
