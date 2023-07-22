import React, { useState, useEffect } from 'react';
export default function useCreateTodo() {
  const [todo, setTodo] = useState('');
  const [Todolist, setTodolist] = useState([]);

  const addTodo = (todo) => {
    setTodolist([...Todolist, { title: todo, key: Todolist.length }]);
  };

  const deleteTodo = (index) => {
    Todolist.splice(index, 1);
    setTodolist([...Todolist]);
  };

  const updateTodo = (index, todo) => {
    Todolist[index] = todo;
    setTodolist([...Todolist]);
  };

  return {
    addTodo,
    Todolist,
    todo,
    setTodo,
    deleteTodo,
    updateTodo,
  };
}
