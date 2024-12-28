import React, { useState } from 'react'
import HeaderImage from '../Component/HeaderImage'
import Usereducer from '../Usereducer'
let rrr = []



function Contact() {
  const [name , setName] = useState("")

  const loginHeandel = ()=>{
    
    
  
      rrr = [{
        "name" : name
      }]
   console.log(rrr);


  
  }
  return (
    <>
   <HeaderImage page="CONTACT"/>

<div className='inputfild'>
   <input type="name" name="" value={name} id="" placeholder='name' onChange={(e)=>{setName(e.target.value)}}/>
   <button onClick={loginHeandel}>Login</button>
   <Usereducer/>
   {rrr.map(function rr(ep){
            return(
              <>
              <h1><b>{ep.name}</b></h1>
              
</>

            )
          })}
   </div>

    </>
  )
}

function pragraf(){
  return(
    <>
       {rrr.map(function rr(ep){
            return(
              <>
              <h1><b>{ep.name}</b></h1>
             
</>

            )
          })}
    </>
  )
}

export { Contact , pragraf }