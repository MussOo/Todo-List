import React from 'react';
import style from './TodoList.module.scss';

export default function TodoList() {
  return (
    <div className={style.container_todolist}>
      <div className={style.container_insertion}>
        <input type='text' /> <a href=''>+</a>
      </div>
      <div className={style.container_list_todo}>
        <div className={style.item_todo}>
          <span>TEST TODO 1</span>
          <div className={style.container_todo_btn}>
            <a className={style.btn_todo_edit}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/pastel-glyph/64/edit--v1.png'
                alt='edit--v1'
              />
            </a>
            <a className={style.btn_todo_delete}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/wired/64/filled-trash.png'
                alt='filled-trash'
              />
            </a>
          </div>
        </div>
        <div className={style.item_todo}>
          <span>TEST TODO 1</span>
          <div className={style.container_todo_btn}>
            <a className={style.btn_todo_edit}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/pastel-glyph/64/edit--v1.png'
                alt='edit--v1'
              />
            </a>
            <a className={style.btn_todo_delete}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/wired/64/filled-trash.png'
                alt='filled-trash'
              />
            </a>
          </div>
        </div>
        <div className={style.item_todo}>
          <span>TEST TODO 1</span>
          <div className={style.container_todo_btn}>
            <a className={style.btn_todo_edit}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/pastel-glyph/64/edit--v1.png'
                alt='edit--v1'
              />
            </a>
            <a className={style.btn_todo_delete}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/wired/64/filled-trash.png'
                alt='filled-trash'
              />
            </a>
          </div>
        </div>
        <div className={style.item_todo}>
          <span>TEST TODO 1</span>
          <div className={style.container_todo_btn}>
            <a className={style.btn_todo_edit}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/pastel-glyph/64/edit--v1.png'
                alt='edit--v1'
              />
            </a>
            <a className={style.btn_todo_delete}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/wired/64/filled-trash.png'
                alt='filled-trash'
              />
            </a>
          </div>
        </div>
        <div className={style.item_todo}>
          <span>TEST TODO 1</span>
          <div className={style.container_todo_btn}>
            <a className={style.btn_todo_edit}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/pastel-glyph/64/edit--v1.png'
                alt='edit--v1'
              />
            </a>
            <a className={style.btn_todo_delete}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/wired/64/filled-trash.png'
                alt='filled-trash'
              />
            </a>
          </div>
        </div>
        <div className={style.item_todo}>
          <span>TEST TODO 1</span>
          <div className={style.container_todo_btn}>
            <a className={style.btn_todo_edit}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/pastel-glyph/64/edit--v1.png'
                alt='edit--v1'
              />
            </a>
            <a className={style.btn_todo_delete}>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/wired/64/filled-trash.png'
                alt='filled-trash'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
