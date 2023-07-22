import React from 'react';
import style from './TodoList.module.scss';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList() {
  return (
    <div className={style.container_todolist}>
      <div className={style.container_insertion}>
        <input type='text' /> <a href=''>+</a>
      </div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
