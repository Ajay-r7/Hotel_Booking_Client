import React from 'react'
import Navbar from '../components/navbar/Navbar'

import Badge from 'react-bootstrap/Badge';

function Booking() {
  return (
    <>
    <Navbar/>

<div className="row">
<div className="col-md-1"></div>
<div className="col-md-10">
 <div className="row  shadow mt-5 "  >
 {/* style={{backgroundColor:' rgb(236, 178, 214)'}} */}
  <div className="col-md-4   ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgw1QcpVM_ETgHLuSxL9GMVLXULvNq4ePDg&s" alt="no image" className='p-3 m-2' style={{width:'300px',height:'300px'}}/>
  </div>
  <div className="col-md-8 ">
    <h3 className='mt-5' style={{fontWeight:'bold',fontFamily:'polo'}}> Flagship 75243 Metro Internationals</h3>
    <h6 className='mt-3'>Booking Id : wbk25s55sfeds4553ssvn514</h6>
    <h6 className='mt-3'>Transaction Id : 129fh3455</h6>
    <h6 className='mt-3'>Check In : 24/09/2024</h6>
    <h6 className='mt-3'>Check Out : 30/09/2024</h6>
    <h6 className='mt-3'>Amount : 236000</h6>
    <h6 className='mt-3'>Status :
      <Badge bg="success p-1 rounded">Confirmed</Badge>
    </h6>

  </div>
 </div>
</div>
<div className="col-md-1"></div>
</div>

  </>
  )
}

export default Booking