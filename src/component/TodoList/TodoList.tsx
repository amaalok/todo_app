import React, { useMemo, useState } from "react";
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

  const [buttonState, setButtonState] = useState("ALL");

  const leftTodo = useMemo(
    () => todos.todo.filter((todo: any) => todo.completed === false),
    [todos]
  );
  const completedTodo = useMemo(
    () => todos.todo.filter((todo: any) => todo.completed === true),
    [todos]
  );

  const clearCompletedTasks = () => {
    dispatch(clearCompleted());
  };

  const renderedListItem = useMemo(() => {
    let renderTodo = null;
    switch (buttonState) {
      case "ALL":
        renderTodo = todos.todo;
        break;
      case "ACTIVE":
        renderTodo = todos.todo.filter((todo: any) => todo.completed === false);
        break;
      case "COMPLETED":
        renderTodo = todos.todo.filter((todo: any) => todo.completed);
        break;
    }
    return renderTodo.length ? (
      renderTodo.map((todo: any) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.name}
          status={todo.completed}
        />
      ))
    ) : (
      <p className={classes.empty}>Nothing to show</p>
    );
  }, [todos, buttonState]);

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
            <button onClick={() => setButtonState("ALL")}>All</button>
            <button onClick={() => setButtonState("ACTIVE")}>Active</button>
            <button onClick={() => setButtonState("COMPLETED")}>
              Completed
            </button>
            {completedTodo.length > 0 && (
              <button onClick={clearCompletedTasks}>Clear Completed</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
