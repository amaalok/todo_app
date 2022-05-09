import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, name: "todo1", completed: false },
    { id: 2, name: "todo2", completed: true },
    { id: 3, name: "todo3", completed: true },
  ],
  reducers: {
    addTodo: (state: any, action: any) => {
      const newTodo = {
        id: new Date().getTime(),
        name: action.payload.todo,
        completed: false,
      };
      return [...state, newTodo];
    },
    deleteTodo: (state: any, action: any) => {
      return state.filter((item: any) => item.id !== action.payload.id);
    },
    updateTodoStatus: (state: any, action: any) => {
      return state.map((todo: any) => {
        console.log(todo.name, todo.completed);
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return { ...todo, completed: action.payload.completed };
      });
    },
    clearCompleted: (state: any) => {
      return state.filter((item: any) => !item.completed);
    },
  },
});
export const { addTodo, deleteTodo, updateTodoStatus, clearCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
