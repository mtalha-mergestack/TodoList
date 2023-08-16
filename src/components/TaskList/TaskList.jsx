/* eslint-disable react/prop-types */
import React,{useState} from 'react'
import styles from '@/components/TodoList/TodoList.module.css'

function TaskList({keyId,value,editListHandler,removeListHandler}) {

    const [editTaskInput,setEditTaskInput ] = useState(value)
    const [checkBox,setCheckBox] = useState(false);
    const [edit,setEdit] = useState(false);

    const editTask = (event) => {
        if(event.key == 'Enter' && checkBox != true){
        editListHandler(event);
        setEdit(false);
        }
    }

    const completed = (event) => {
        if(event.target.checked) setCheckBox(true) 
        else setCheckBox(false)
    }
    
  return (
    <li key={keyId}>
        {edit?"":<input type="checkbox" onClick={completed}/>}
        <span  className={`${checkBox?styles.completed:""}`}>
            {edit?<input id={keyId} type='text' value={editTaskInput} onChange={(event)=>setEditTaskInput(event.target.value)} onKeyDown={editTask}/>:value}
        </span>
        <i onClick={()=>{if(!checkBox) setEdit(!edit)}} className={`fa fa-edit ${styles.edit}`}></i>
        <i id={keyId} className={`fa fa-trash ${styles.del}`} onClick={removeListHandler}></i>
    </li>
  )
}

export default TaskList
