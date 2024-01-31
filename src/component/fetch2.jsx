// import React, { useEffect, useState} from 'react'

// function Employee() {
//     const[user,setUser]=useState([]);

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response=>response.json())
//         .then((resolve)=>setUser(resolve))
//         .catch(error=>console.log(error))
//     })

    
//   return (
//     <div>
//         <ul>
//             <li>ID</li>
//             <li>TITLE</li>
//             <li>BODY</li>

//         </ul>
//         {user.map((data,i)=>(
//             <ul key={i}>
//             <li>{data.id}</li>
//             <li>{data.title}</li>
//             <li>{data.body}</li>
//             </ul>
//         ))}

        
//     </div>
//   )
// }

// export default Employee
import React, { useEffect, useState } from 'react';

function Employee() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        <li>ID</li>
        <li>TITLE</li>
        <li>BODY</li>
      </ul>
      {user.map((data, i) => (
        <ul key={i}>
          <li>{data.id}</li>
          <li>{data.title}</li>
          <li>{data.body}</li>
        </ul>
      ))}
    </div>
  );
}

export default Employee;

