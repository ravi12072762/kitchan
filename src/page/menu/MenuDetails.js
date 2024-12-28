import React from 'react'
import { useParams } from 'react-router-dom'
import Food from "../menu/Menulink"


function MenuDetails() {

  const {menu_id}  = useParams()

  const id = menu_id

  console.log(id);

  return (
    <>
   <div className='detail_div'>
   <img src={Food[id].src} alt="" className='detail_div' width={"100%"} height={"100%"} />
   </div>
   
    <h2>{Food[id].name}</h2>
    <h1><b>{Food[id].p}</b></h1>
    <p><i>{Food[id].dis}</i></p>

    <div style={{display:"flex", alignItems:"center"}}>
      <h1>20% Off</h1>
      <img src="https://clipart-library.com/img/988574.gif" alt="" />
    </div>

    {/* <MenuImage  src={Food[id].src} name={Food[id].name} price={Food[id].p} dis = {Food[id].dis}  /> */}

    </>

  )
}

export default MenuDetails