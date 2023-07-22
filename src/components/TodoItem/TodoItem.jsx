import React, { useEffect, useState } from 'react';
import style from './TodoItem.module.scss';

export default function TodoItem({ index, data, del, edit }) {
  const [editMode, setEditMode] = useState(false);
  const [Options, setOptions] = useState([]);
  const [updateValues, setUpdateValues] = useState({ title: data.title });
  useEffect(() => {
    console.log('test', editMode);
    var option = editMode ? (
      <div className={style.container_todo_btn}>
        <a
          className={style.btn_todo_edit}
          onClick={() => {
            setEditMode(!editMode);
            edit(updateValues);
          }}
        >
          <img
            width='30'
            height='30'
            src='https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-check-basic-ui-elements-flatart-icons-outline-flatarticons.png'
            alt='external-check-basic-ui-elements-flatart-icons-outline-flatarticons'
          />
        </a>
      </div>
    ) : (
      <div className={style.container_todo_btn}>
        <a
          className={style.btn_todo_edit}
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          <img
            width='30'
            height='30'
            src='https://img.icons8.com/pastel-glyph/64/edit--v1.png'
            alt='edit--v1'
          />
        </a>
        <a className={style.btn_todo_delete} onClick={del}>
          <img
            width='30'
            height='30'
            src='https://img.icons8.com/wired/64/filled-trash.png'
            alt='filled-trash'
          />
        </a>
      </div>
    );
    setOptions(option);
  }, [editMode, updateValues]);
  return (
    <div className={style.item_todo}>
      {editMode ? (
        <input
          type='text'
          placeholder={data.title}
          onChange={(e) => {
            setUpdateValues({ title: e.target.value });
          }}
        />
      ) : (
        <span>{data.title}</span>
      )}
      {Options}
    </div>
  );
}
