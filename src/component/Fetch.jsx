import React, { useEffect, useState } from 'react'

function Fetch() {
  const[users,setUser]=useState([]);

  useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then((user)=>setUser(user))
.catch(err=>console.log(err))
  },[])
    
  return (
    <div>Fetch

        <table>
            <tr>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </thead>
            </tr>
          <tbody>
            {users.map((d,i)=>(
 <tr key={i}>
    <td>{d.id}</td>
    <td>{d.name}</td>
    <td>{d.email}</td>            
 </tr>
            ))}
           
          </tbody>
        </table>
    </div>
  )
}

export default Fetch