import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import classes from "./TodoList.module.css";

const TodoList = () => {
  let todos = useSelector((state: any) => {
    return state.todo;
  });
  const [showTodo, setShowTodo] = useState(todos);
  const leftTodo = useSelector((state: any) => {
    return state.todo.filter((todo: any) => todo.completed === false);
  });
  const completedTodo = useSelector((state: any) => {
    return state.todo.filter((todo: any) => todo.completed === true);
  });
  const completedFlag = completedTodo.length > 0 ? true : false;
  const showCompleted = () => {
    setShowTodo(completedTodo);
  };
  const showActive = () => {
    setShowTodo(leftTodo);
  };
  const showAllTodo = () => {
    setShowTodo(todos);
  };
  const renderedListItem = showTodo.map((todo: any) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        title={todo.name}
        status={todo.completed}
      />
    );
  });
  return (
    <div className="tasks-list">
      {renderedListItem}
      {todos.length > 0 && (
        <div>
          <p
            className={classes["todo-count"]}
          >{`${leftTodo.length} items left`}</p>
          <div className={classes.actions}>
            <p onClick={showAllTodo}>All</p>
            <p onClick={showActive}>Active</p>
            <p onClick={showCompleted}>Completed</p>
            {completedFlag && <p>Clear Completed</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
