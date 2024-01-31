import React from 'react';

// const names = ['James', 'John', 'Paul', 'Ringo', 'George'];


// function Filterr() {
//   return (
//     <div>
//         {names.filter(name=> name.includes('J')).map(filteredName=>(
//             <li>{filteredName}</li>
//         ))}
//     </div>
//   )
// }
const people = [
    {
      name: 'James',
      age: 31,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    }
  ];

function Filter() {
  return (
    <div>
        {people.filter(person=>person.age <60 ).map(Filteredage=>(
            <li>
                {Filteredage.age}
             
            </li>
        ))}
    </div>
  )
}

export default Filter



