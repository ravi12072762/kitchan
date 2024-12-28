import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className='navigation'>
                <div className='container navbar'>

                     
                            <ul>
                                <li> <Link to="/" >Home</Link> </li>
                                <li><Link to="/Menu">Menu</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                                <li><Link to="/brand">Brand</Link></li>

                            </ul>
                </div>
            </div>

        </>
    )
}

export default Header


















