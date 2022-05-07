import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/todoSlice";

const TodoItem = (props: any) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTodo({
        id: props.id,
      })
    );
  };

  return (
    <li className="task-item">
      <div>{props.title}</div>
      <div>
        <button
          className="remove-task-button"
          onClick={() => {
            removeTask();
          }}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
