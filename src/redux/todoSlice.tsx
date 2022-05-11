import { createSlice, current } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [
      { id: 1, name: "todo1", completed: false },
      { id: 2, name: "todo2", completed: true },
      { id: 3, name: "todo3", completed: true },
    ],
  },
  reducers: {
    addTodo: (state: any, action: any) => {
      console.log(current(state.todo));
      const newTodo = {
        id: new Date().getTime(),
        name: action.payload.todo,
        completed: false,
      };
      state.todo = [...state.todo, newTodo];
      console.log(state.todo);
    },
    deleteTodo: (state: any, action: any) => {
      const todo = current(state.todo);
      const allTodo = todo.filter((item: any) => item.id !== action.payload.id);
      state.todo = [...allTodo];
    },
    updateTodoStatus: (state: any, action: any) => {
      const todos = current(state.todo);
      const allTodo = todos.map((todo: any) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return { ...todo, completed: action.payload.completed };
      });
      state.todo = [...allTodo];
    },
    clearCompleted: (state: any) => {
      const todos = current(state.todo);
      const allTodo = todos.filter((todo: any) => !todo.completed);
      state.todo = [...allTodo];
    },
  },
});
export const { addTodo, deleteTodo, updateTodoStatus, clearCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
