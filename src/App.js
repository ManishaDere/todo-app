// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './features/todo/todoSlice';
import { Container } from '@mui/material';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  // Dispatch add todo action
  const handleAddTodo = (todoText) => {
    dispatch(addTodo(todoText));
  };

  // Dispatch toggle todo action
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  // Dispatch remove todo action
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <Container maxWidth="sm">
      <h1>Todo App</h1>
      
      {/* Todo input component */}
      <TodoInput onAddTodo={handleAddTodo} />

      {/* Todo list component */}
      <TodoList 
        todos={todos} 
        onToggleTodo={handleToggleTodo} 
        onRemoveTodo={handleRemoveTodo} 
      />
    </Container>
  );
};

export default App;
