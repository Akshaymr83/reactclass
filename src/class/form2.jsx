
import React , {useState} from 'react'

function Form2() {
    const [name,setName]=useState('')
    const [gender,setGender]=useState('')
    const [age,setAge]= useState('')
    const [submiteddata,setData]=useState('')
    const handleSubmit =(event)=>{
        event.preventDefault();
        setData(true)


    }
    
  return (
    <div style={{textAlign:'center',height:'100vh'}}>
         <h1 style={{ fontSize:'30px',fontWeight:'700'}}>FORM</h1>
        <div style={{textAlign:'center',height:'200px',marginRight:'500px',marginLeft:'500px',border:'2px solid black',paddingTop:'50px',borderRadius:'5px',background:'#faf7c3'}}> 
           
        <form >
            <label style={{fontWeight:'700'}}>NAME : </label>
            <input type='text' onChange={(event)=>setName(event.target.value)} value={name}  style={{width:'70%'}}></input><br />
            <label style={{fontWeight:'700'}} >Gender:  </label>
            
            <input type="radio" name="gender" id="male" value="Male" onChange={(event)=>setGender(event.target.value)} style={{marginTop:'20px'}} />
            <label >Male</label>
         
            <input type="radio" name="gender" id="Female" value="Female"onChange={(event)=>setGender(event.target.value)}style={{marginTop:'20px'}}/>
            <label >Female</label><br />
            <label style={{fontWeight:'700'}} >Age : </label>
            <input type="text" name="" id="" onChange={(event)=>setAge(event.target.value)} value={age} style={{marginTop:'20px',width:'70%'}}/> <br />
            <button type="button" onClick={handleSubmit} style={{ border:'none',borderRadius:'5px',color:'white',background:'#42bff5',marginTop:'20px',paddingLeft:'20px',paddingRight:'20px',paddingTop:'0px'}}> <h4>Submit</h4></button>
        </form> 
        </div >
      
            {submiteddata&&
            <div style={{textAlign:'center',height:'200px',color:'white',background:'black',marginRight:'500px',marginLeft:'500px'}}>
                <h3 style={{color:'white', paddingTop:'30px'}}>Name : {name}</h3>
                <h3 style={{color:'white', paddingTop:'10px'}}>Gender:{gender}</h3>
                <h3 style={{color:'white', paddingTop:'10px'}}>Age : {age}</h3>
            </div>
            }
              
    </div>
  )
}

export default Form2