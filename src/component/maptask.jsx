import React from 'react'

function ElementMap() {
    const Element =[    {
        id: 1,
        setup: "What's the best thing about a Boolean?",
        punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
        id: 2,
        setup: "Why do programmers wear glasses?",
        punchline: "Because they need to C#"
    }
]
const box ={
    display:'flex',
   background:'rgb(164,237,176)',
   height:'60vh',
  
   position:'relative'
    

}
const box2 ={
    background:'white',
    paddingLeft:'40px',
    paddingTop:'40px',
    height:'40vh',
    marginTop:'40px',
    borderRadius:'5px',
    marginLeft:'40px',
    width:'90vh'
    
}
const paragraphStyle = {
    fontSize: '20px',
    lineHeight: '1.5'
   
};

  return (
    <div style={box}>
        
            {Element.map(newdata =>(
                <div style={box2}>
                    <h1>{newdata.setup}</h1>
                    <p style={paragraphStyle}> {newdata.punchline}</p>
                    <br />
                </div>
                

            ))}
        
        </div>
  )
}

export default ElementMap