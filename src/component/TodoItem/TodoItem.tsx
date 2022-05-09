import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodoStatus } from "../../redux/todoSlice";
import classes from "./TodoItem.module.css";

const TodoItem = (props: any) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTodo({
        id: props.id,
      })
    );
  };
  const handleCompleteClick = () => {
    dispatch(
      updateTodoStatus({
        id: props.id,
        completed: !props.status,
      })
    );
  };
  return (
    <div className={classes.items}>
      <div className={classes["items-name"]}>
        <input
          type="checkbox"
          id={classes.checkbox}
          onChange={handleCompleteClick}
          checked={props.status}
        />
        <label>{props.title}</label>
      </div>
      <button
        className={classes["remove-task-button"]}
        onClick={() => {
          removeTask();
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
