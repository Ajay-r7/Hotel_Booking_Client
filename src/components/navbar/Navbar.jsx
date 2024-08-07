import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
  return (
    <>
    <div className="nav-wrapper" >
        <div className="nav-content" >
            <div className="title ">
                <h3 style={{marginLeft:'-400px'}}>Hotel<span style={{color:'blueviolet',}}>ier.</span></h3>
            </div>
                <ul className='mt-3'>
                    <li>
                        <h5><Link to={'/home'} className="menu-item">Home</Link></h5>
                    </li>
                   
                    <li>
                        <h5><Link to={'/booking'} className="menu-item">My Booking</Link></h5>
                    </li>
                    <li>
                        <h5><Link to={'/rooms'} className="menu-item">Rooms</Link></h5>
                    </li>
                    
                </ul>
               
        </div>
        <div className="p-1 me-3">
            <Link to={'/'} style={{textDecoration:'none'}}><button className="contact-btn"><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Logout</button></Link>
        </div>
    </div>
    </>
  )
}

export default Navbar