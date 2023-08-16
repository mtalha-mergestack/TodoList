/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "@/components/TodoList/TodoList.module.css";

function TaskList({ keyId, value, editListHandler, removeListHandler }) {
  const [editTaskInput, setEditTaskInput] = useState(value);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const editTask = (event) => {
    if (event.key == "Enter" && isCompleted != true) {
      editListHandler(event.target.id, event.target.value);
      setIsEditing(false);
    }
  };

  const completed = (isChecked) => {
    isChecked ? setIsCompleted(true) : setIsCompleted(false);
  };

  return (
    <li key={keyId}>
      {isEditing ? "" : <input type="checkbox" onClick={(event)=>completed(event.target.checked)} />}
      <span className={`${isCompleted ? styles.completed : ""}`}>
        {isEditing ? (
          <input
            id={keyId}
            type="text"
            value={editTaskInput}
            onChange={(event) => setEditTaskInput(event.target.value)}
            onKeyDown={editTask}
          />
        ) : (
          value
        )}
      </span>
      {isCompleted ? (
        ""
      ) : (
        <i
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          className={`fa fa-edit ${styles.right}`}
        ></i>
      )}
      <i id={keyId} className={`fa fa-trash ${styles.right}`} onClick={(event)=>removeListHandler(event.target.id)}></i>
    </li>
  );
}

export default TaskList;
