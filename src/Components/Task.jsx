import React, { useState } from 'react'
import { MdOutlineDelete } from "react-icons/md"
import { RiFileEditLine } from "react-icons/ri";


function Task({Task,handleCheck,deleteTask,editTask}) {
  const [isChecked,setIsChecked] = useState(Task.isChecked)
  const handleChecking = () =>{
    setIsChecked(!isChecked)
    handleCheck(Task.id,isChecked)
  }
  return (
    <div className="Task">
        <input onChange={handleChecking} type='checkbox' checked={isChecked}/>
        <div className='task_in'>
          <p style={{textDecoration:isChecked?'line-through':'none',transition:"0.6s"}}>{Task.task}</p>
        </div>
        <div className='buttons'>
          <button onClick={()=>deleteTask(Task.id)}><MdOutlineDelete size={"20px"}/></button>
          <button onClick={()=>editTask(Task.id)}><RiFileEditLine size={"20px"}/></button>
        </div>
    </div>
  )
}

export default Task