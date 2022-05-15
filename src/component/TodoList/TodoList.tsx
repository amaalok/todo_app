import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../../redux/todoSlice";
import classes from "./TodoList.module.css";
import { useTranslation } from "react-i18next";

const TodoList = () => {
  const { t } = useTranslation();
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
      <p className={classes.empty}>{t("Nothing to show")}</p>
    );
  }, [t, todos, buttonState]);

  return (
    <div className="tasks-list">
      {console.log("render")}
      {renderedListItem}
      {todos.todo.length > 0 && (
        <div>
          <p className={classes["todo-count"]}>
            {leftTodo.length} {t("items left")}
          </p>
          <div className={classes.actions}>
            <button onClick={() => setButtonState("ALL")}>{t("All")}</button>
            <button onClick={() => setButtonState("ACTIVE")}>
              {t("Active")}
            </button>
            <button onClick={() => setButtonState("COMPLETED")}>
              {t("Completed")}
            </button>
            {completedTodo.length > 0 && (
              <button onClick={clearCompletedTasks}>
                {t("Clear Completed")}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
