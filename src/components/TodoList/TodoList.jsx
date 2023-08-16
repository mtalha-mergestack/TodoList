import React , {useState} from 'react'
import styles from '@/components/TodoList/TodoList.module.css'
import TaskList from '@/components/TaskList/TaskList';

function TodoList() {
  const [list,setlist] = useState([])

  const addListHandler = (event)=>{
    if(event.key == 'Enter'){
      setlist([...list, event.target.value])
      event.target.value=""
    }    
  }

  const removeListHandler = (event)=>{
    const index = event.target.id
    let copy = [...list];
    copy = copy.filter((event,i) => i!=index);
    if(copy.length == 0) setlist([])
    else setlist([...copy])
  
  }

  const editListHandler = (event)=>{ 
    const index = event.target.id
    let copy = [...list];
    copy[index] = event.target.value;
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
