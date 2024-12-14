// src/components/TodoInput.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TodoInput = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <TextField
        label="Add Todo"
        variant="outlined"
        fullWidth
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '10px' }}
        onClick={handleAddTodo}
      >
        Add Todo
      </Button>
    </div>
  );
};

export default TodoInput;
