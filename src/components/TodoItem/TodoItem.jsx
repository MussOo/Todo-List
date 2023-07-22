import React, { useEffect, useState } from 'react';
import style from './TodoItem.module.scss';
import Option from './Option/Option';

export default function TodoItem({ index, data, del, edit }) {
  const [editMode, setEditMode] = useState(false);
  const [updateValues, setUpdateValues] = useState(data);

  useEffect(() => {
    setUpdateValues(data);
  }, [setUpdateValues]);

  return (
    <div className={style.item_todo}>
      {editMode ? (
        <input
          type='text'
          placeholder={data.title}
          className={style.item_update_todo}
          onChange={(e) => {
            setUpdateValues({ title: e.target.value });
          }}
        />
      ) : (
        <span>{data.title}</span>
      )}
      <Option
        updateValues={updateValues}
        setEditMode={setEditMode}
        editMode={editMode}
        index={index}
        edit={edit}
        del={del}
      />
    </div>
  );
}
