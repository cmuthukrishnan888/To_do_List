import React, { useState } from 'react'

function Editform({editTask,task}) {
  
  const [value,setValue] = useState(task.task)
  const handleSubmit = (e) =>{
    e.preventDefault()
    editTask(value,task.id)
}
  return (
    <form>
        <input type='text' value={value} onChange={e=>setValue(e.target.value)
        }/>
        <button onClick={handleSubmit}>Edit</button>
    </form>
  )
}

export default Editform