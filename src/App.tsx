import React from "react";
import AddTodo from "./component/AddTodo/AddTodo";
import TodoList from "./component/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
