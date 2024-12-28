import React from 'react'

function HeaderImage(props) {
  return (
    <div className='menuimg'>
        <h1 className='home'>{props.page} <i class="fa-solid fa-heart"></i></h1>
    </div>
  )
}

export default HeaderImage