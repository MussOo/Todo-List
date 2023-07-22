import React, { useEffect, useState } from 'react';
import style from './TodoList.module.scss';
import TodoItem from '../TodoItem/TodoItem';
import useCreateTodo from '../../hooks/useCreateTodo';

export default function TodoList() {
  const [containerTodos, setContainerTodos] = useState([]);
  const { addTodo, Todolist, todo, setTodo, deleteTodo, updateTodo } = useCreateTodo();

  useEffect(() => {
    var item = Todolist.map((item, key) => (
      <TodoItem
        key={key}
        index={key}
        data={item}
        del={() => {
          deleteTodo(key);
        }}
        edit={(e) => {
          updateTodo(key, e);
        }}
      />
    ));
    setContainerTodos(item);
  }, [Todolist, todo]);

  return (
    <div className={style.container_todolist}>
      <div className={style.container_insertion}>
        <input
          type='text'
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />{' '}
        <a
          onClick={() => {
            addTodo(todo);
            setTodo('');
          }}
        >
          +
        </a>
      </div>
      {containerTodos}
    </div>
  );
}
