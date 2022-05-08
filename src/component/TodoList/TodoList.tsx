import React from "react";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = useSelector((state: any) => {
    return state.todo;
  });
  const leftTodo = useSelector((state: any) => {
    return state.todo.filter((todo: any) => todo.completed === false);
  });
  const completedTodo = useSelector((state: any) => {
    return state.todo.filter((todo: any) => todo.completed === true);
  });
  let completedFlag = false;
  if (completedTodo.length > 0) {
    completedFlag = true;
  }
  return (
    <div className="tasks-list">
      {todos.map((todo: any) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.name}
          status={todo.completed}
        />
      ))}
      {todos.length > 0 && (
        <div>
          <p>{`${leftTodo.length} items left`}</p>
          <Button type="All" />
          <Button type="Active" />
          <Button type="Completed" />
          {completedFlag && <Button type="Clear Completed" />}
        </div>
      )}
    </div>
  );
};

export default TodoList;
