import React, { useState } from 'react'

function Memo2() {
    const [number,setNumber]=useState('');
    const [dark,setDark]=useState(false)

    const style={
      backgroundColor:dark?'red':'white',
      color:dark?"white":"red"


    }

    // const cnum=(n)=>{
    //     for(let i=0;i<=1000000;i++){}  //deleay
    //     return n
    // }

    function calaculation (n){
      console.log('loop');
    for(let i=0;i<100000000000;i++){}
    return n;
    }

    const cnum=calaculation(number)
  return (
    <div style={style} > Memo
<input type='number' onChange={(e)=>setNumber(e.target.value)} value={number}></input>
<button onClick={()=>setDark(!dark)}>tooggle</button>
<h1>{cnum}</h1>

    </div>
  )
}

export default Memo2