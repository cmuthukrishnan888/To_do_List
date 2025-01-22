import React, { useState } from 'react'

function Form({addTask}) {
  
  const [value,setValue] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    if (value.length!==0) {
      addTask(value)
    }else{
      alert('Enter Valid Task')
    }
    setValue('')
}
  return (
    <form className='formControl'>
        <input type='text' maxLength={20} value={value} onChange={e=>setValue(e.target.value)
        }/>
        <button onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default Form