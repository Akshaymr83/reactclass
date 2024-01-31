import React from 'react'

function Newmap() {
    const Employee = [{name:"Akshay",age:21},
    {name:"Akash",age:22}
,{name:"Midhun",age:27}]
  return (
    <div>
    <table>
        <tr><th>name</th>
        <th>age</th>
        </tr>
        {Employee.map(newdata =>(
            <tr>
                <td>{newdata.name}</td>
                <td>{newdata.age}</td>
            </tr>
        ))}
    </table>
    </div>
  )
}

export default Newmap