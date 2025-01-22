import React, { useState } from 'react'
import Form from '../Components/Form'
import Task from './Task'
import '../TodoList.css'
import Editform from './EditForm'
import '../TodoList.css'

function TodoList() {
    const [tasks,setTasks] = useState([])
    const addTask = (value) =>(
        setTasks([...tasks,{id:tasks.length+1,task:value,isEditing:false,isChecked:false}])
    )
    const handleCheck = (id,checking) =>{
      const newTasks = tasks.map(t=>t.id===id?{...t,isChecked:checking}:t)
      setTasks(newTasks)
    }
    const deleteTask = (id) =>{
      setTasks(tasks.filter(t=>t.id!==id))
    }

    const editTask = (id) =>(
      setTasks(tasks.map(t=>t.id===id?{...t,isEditing:!t.isEditing}:t))
    )

    const taskEdit = (task,id) =>(
      setTasks(tasks.map(t=>t.id===id?{...t,task:task,isEditing:!t.isEditing}:t))
    )
  return (
    <div className='container'>
        <Form addTask={addTask}/>
        {
          tasks.length!==0?(tasks.map(task=>(task.isEditing?(<Editform key={task.id} task={task} editTask={taskEdit}/>):(<Task key={task.id} Task={task} editTask={editTask} deleteTask={deleteTask} handleCheck={handleCheck}/>)))):<p style={{color:"white",fontSize:"20px",letterSpacing:"5px",fontWeight:"800",}}>No Tasks in the List</p>
        }
    </div>
  )
}

export default TodoList