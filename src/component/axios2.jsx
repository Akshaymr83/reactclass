import React, { useEffect ,useState} from 'react'
import axios from 'axios';

function Details() {
    const [todo,setTodo]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(resolve=>setTodo(resolve.data))
        .catch(err=>console.log(err))
       
    })
  return (
    <div>
       {todo.map((d,i)=>
       <ul key={i}>
       <li>ID :{d.id}</li>
       <li>TITLE :{d.title}</li>
       <li>COMPLETED :{d.completed}</li>
   </ul>
       )}
        
       
    </div>
  )
}

export default Details