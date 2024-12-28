import React from 'react'
import kitchent from "../Images/kitchen2 img.jpg"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='img_logo'>
                        <img src={kitchent} alt="" width={"100%"}  height={"100%"}/>
                    </div>
                        <p>A kitchen is a room or part of a room used for cooking and food preparation in a dwelling or in a commercial establishment.</p>
                       <h2><i class="fa-brands fa-instagram "></i> <i class="fa-brands fa-whatsapp"></i> <i class="fa-brands fa-facebook"></i>  <i class="fa-brands fa-twitter"></i></h2>

                </div>
                   
                <div className='col-md-3'>
                    <div>
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eligenm! Maiores.</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='footer_inner2'>
                        <h3>Services</h3>
                                <li> <Link to="/" >Home</Link> </li>
                                <li><Link to="/Menu">Menu</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div>
                        <h3>Contact Us </h3>
                        <p><i class="fa-solid fa-phone"></i> phone number-1234567</p>
                        <p><i class="fa-solid fa-location-pin"></i> Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        
                        </div>
                </div>

            </div>

        </div>



      </div>
    </>
  )
}

export default Footer