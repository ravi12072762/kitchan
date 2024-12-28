import React from 'react'
import { Link } from 'react-router-dom'

function MenuImage(props) {
  return (
    <>
    
    <div className='col-md-4'>
    <Link to={`/details/${props.id}`} >
        <div className='box2'>
        <img src={props.src} alt=""  className='food_image' />
        <div className='box_inner'>
        <h4>{props.name}</h4>
        <p>{props.dis}</p>
        </div>
        <h4>{props.price}</h4>
        
        </div>
         </Link>
         </div>
       
    </>
  )
}

export default MenuImage