import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../../redux/todoSlice";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const dispatch = useDispatch();
  let todos = useSelector((state: any) => {
    return state.todo;
  });
  const [showTodo, setShowTodo] = useState(todos.todo);
  const leftTodo = todos.todo.filter((todo: any) => todo.completed === false);
  const completedTodo = todos.todo.filter(
    (todo: any) => todo.completed === true
  );

  const showCompleted = () => setShowTodo(completedTodo);
  const showActive = () => setShowTodo(leftTodo);
  const showAllTodo = () => setShowTodo(todos.todo);

  const clearCompletedTasks = () => {
    dispatch(clearCompleted());
  };

  let renderedListItem = showTodo.map((todo: any) => {
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
      {console.log("render")}
      {renderedListItem}
      {todos.todo.length > 0 && (
        <div>
          <p
            className={classes["todo-count"]}
          >{`${leftTodo.length} items left`}</p>
          <div className={classes.actions}>
            <p onClick={showAllTodo}>All</p>
            <p onClick={showActive}>Active</p>
            <p onClick={showCompleted}>Completed</p>
            {completedTodo.length > 0 && (
              <p onClick={clearCompletedTasks}>Clear Completed</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
