import React , {useState} from 'react'
import styles from './TodoList.module.css';
import TaskList from '../TaskList/TaskList';

function TodoList() {
  const [list,setlist] = useState([])

  const addListHandler = (e)=>{
    if(e.key == 'Enter'){
      setlist([...list, e.target.value])
      e.target.value=""
    }    
  }

  const removeListHandler = (e)=>{
    const index = e.target.id
    let copy = [...list];
    if (index !== -1) {
      copy = copy.filter((e,i) => i!=index);
      if(copy.length == 0) setlist([])
      else setlist([...copy])
    }  
  }

  const editListHandler = (e)=>{ 
    const index = e.target.id
    let copy = [...list];
    if (index !== -1) {
      copy[index] = e.target.value;
    }
      setlist([...copy])
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>My Todo</h1>
      <input className={styles.input} type='text' placeholder='Input task name and press enter to add' onKeyDown={addListHandler}/>
      <hr/>
      <ul id={styles["listContainer"]}>
        {list.map((val,i) => <TaskList key={i} keyId={i} value={val} editListHandler={editListHandler} removeListHandler={removeListHandler}/>)}
      </ul>
    </div>
  )
}

export default TodoList