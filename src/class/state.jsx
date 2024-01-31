import React, { useState } from 'react'

function State() {
    const[count,setcount]=useState(0)

    const handleClick=(event)=>{
        event.preventDefault();
        setcount(count+1);
    }

    const handledecremnt=(e)=>{
        e.preventDefault();
        setcount(count-1)
    }
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={handleClick}>Increment {count}</button>
        <button onClick={handledecremnt}>decrement {count}</button>
    </div>
  )
}

export default State


// import React ,{ useState } from 'react'

// function Newstate() {
//     const [newcount ,set]=useState(0)

//     const handleClicknew=(eventnew) =>{
//         eventnew.preventDefault();
//         set(newcount-1);
//     }
//   return (
//     <div>
//         <h1>number:{newcount}</h1>
//         <button onClick={handleClicknew}>decrement</button>
//     </div>
//   )
// }

// export default Newstate