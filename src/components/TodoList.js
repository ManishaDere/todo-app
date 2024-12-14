// src/components/TodoList.js
import React from 'react';
import { List, ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
  return (
    <List>
      {todos.map(todo => (
        <ListItem key={todo.id} dense>
          <Checkbox
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
          />
          <ListItemText
            primary={todo.text}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          />
          <IconButton onClick={() => onRemoveTodo(todo.id)} edge="end">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
