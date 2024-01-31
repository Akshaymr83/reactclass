import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditAxioss() {
  const { id } = useParams(); // Use destructuring to get the id from useParams
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then(response => {
        const data = response.data;
        setName(data.name);
        setEmail(data.email);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleEdit = () => {
    const updatedData = { name, email };
    axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`, updatedData)
      .then(() => {
        console.log(updatedData);
        navigate('/')
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div>
        <form>
          <label>Name</label>
          <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} value={name}></input><br></br>
          <label>Email</label>
          <input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email}></input><br></br>
          {/* Hidden input for id */}
          <input type='hidden' value={id} />
          <button type="button" onClick={handleEdit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EditAxioss;
