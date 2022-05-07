import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = useSelector((state: any) => {
    return state.todo;
  });
  console.log(todos);
  return (
    <ul className="tasks-list">
      {todos.map((todo: any) => (
        <TodoItem id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </ul>
  );
};

export default TodoList;
