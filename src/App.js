import React from 'react'
import Maps from './component/map'
import Newmap from './component/newmap'
import Mappedfun from './component/mappractice'
import ElementMap from './component/maptask'
import Pro from './class/pro'
import State from './class/state'
import Newstate from './class/state'
import Form from './class/form'
import Multiply from './class/multiply event'
import Form2 from './class/form2'
import Filterr from './class/filter'
import Fetch from './component/Fetch'
import Employee from './component/fetch2'
import Axioss from './component/Axioss'
import Details from './component/axios2'
import EditAxioss from './component/EditAxioss'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Memo from './component/Memo'
function App() {
  return (
    <div>
      {/* <Maps/>
      <Newmap/>
      <Mappedfun/> */}
      {/* <ElementMap/>
      <Pro name={'freena'} place={'pkd'}/>
      <State/> */}
      {/* <Form/>
      <State/> */}
      {/* <Multiply/>
      <Form/> */}
      {/* <Form2/> */}
      {/* <Filterr/> */}
      {/* <Fetch/> */}
      {/* <Employee/> */}
      {/* <Axioss/> */}
      {/* <Details/> */}

      <BrowserRouter>
      <Routes>

      
      <Route path='/' element={<Axioss/>}></Route>
      <Route path='/edit/:id' element ={<EditAxioss/>}></Route>
      {/* <Route path='/memo' element ={<Memo/>}></Route> */}
      <Route path='/memo' element ={<Multiply/>}></Route>
      </Routes>

      </BrowserRouter>
   
     
    </div>
  )
}

export default App