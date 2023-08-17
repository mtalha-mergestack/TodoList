import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, editTodo } from "@/redux/actions";
import styles from "@/components/TodoList/TodoList.module.css";
import TaskList from "@/components/TaskList/TaskList";

function TodoList() {
  const [taskInput, setTaskInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addListHandler = (key) => {
    if (key == "Enter") {
      dispatch(addTodo(taskInput));
      setTaskInput("");
    }
  };

  const removeListHandler = (index) => {
    dispatch(removeTodo(index));
  };

  const editListHandler = (index, value) => {
    dispatch(editTodo(index, value));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>My Todo</h1>
      <input
        className={styles.input}
        value={taskInput}
        type="text"
        placeholder="Input task name and press enter to add"
        onChange={(event) => setTaskInput(event.target.value)}
        onKeyDown={(event) => addListHandler(event.key)}
      />
      <hr />
      <ul className={styles.listContainer}>
        {todos.map((val, i) => (
          <TaskList
            key={i}
            keyId={i}
            value={val}
            editListHandler={editListHandler}
            removeListHandler={removeListHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
