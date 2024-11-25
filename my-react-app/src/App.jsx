
import React from 'react';
import { TodoProvider } from "./Component/TodoContext"
import TodoList from './Component/ToDoList';
import TodoForm from './Component/ToDoForm';

const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;