import React, { useState } from 'react'

function Form() {
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
const[status,setStatus]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        setStatus(true)
      
        
    }
  return (
    <div >
        <div style={{marginLeft:'500px'}}>
        <form >
            <label>Name</label>
            <input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)} value={name}></input><br></br>
            <label>Age</label>
            <input type='text' placeholder='age' onChange={(e)=>setAge(e.target.value)} value={age}></input><br></br>
<button onClick={handleSubmit}>Submit</button>
        </form>
        </div>
       {status&&
       <div>
        <p>name:{name}</p>
        <p>age:{age}</p>
       </div>
       }

    </div>
  )
}

export default Form
 



