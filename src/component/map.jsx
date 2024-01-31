import React from 'react'

function Maps() {

    const data = [{
        id:1,name:"sdsdd"

    },
{
    id:2,name:"freena"
},
{
    id:3,name:"francis"
}]
  return (
    <div>
      <table>
<tr>
    <th>id</th>
    <th>name</th>
</tr>
{data.map(dt => (
<tr>
    <td>{dt.id}</td>
    <td>{dt.name}</td>
</tr>
))}
        </table>  
    </div>
  )
}

export default Maps