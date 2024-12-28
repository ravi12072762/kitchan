import React from 'react'
import HeaderImage from '../Component/HeaderImage'

function Home() {
  return (
    <>
      <HeaderImage page="HOME" />

      <div className='home_image'>
        <img src="https://png.pngtree.com/background/20230519/original/pngtree-an-old-coffee-shop-with-very-dark-walls-picture-image_2652909.jpg" alt="" height={"100%"} width={"100%"} />
      </div>
      <div className='home_image_inner'>
        <h5>welcome to our delicious corner</h5>
        <h1>BEHIND THE DISHES</h1>
        <div>
          <h6>Lorem ipsum dolor sit amet cong elit. uo iste seds hic quaerat id facilis</h6>
          <h6> ipsum totam eum inventore a quisquam ab illo?</h6>
        </div>
        <button>LEARN  MORE</button>
      </div>
    </>
  )
}

export default Home




{/* <div className='home_image_inner'>
  <p style={{fontSize:"20px"}}>welcome to our delicious corner</p>
  <h1 style={{fontSize:"80px"}}>BEHIND THE DISHES </h1>
  <div style={{width:"50%"}} className='d-flex justify-content-center'>
  <p style={{fontSize:"20px"}} >Lorem ipsum dolor sit amet cong elit. uo iste seds hic quaerat id facilis  &nbsp; 
   ipsum totam eum inventore a quisquam ab illo?</p>
   </div>
   <button style={{background:"orange" , color:"black", border:"none" , padding:"5px", borderRadius:"10px"}}>Learn MOre</button>
 </div> */}