import React from 'react'
import Roomcards from '../components/Roomcards'
import SearchInput from '../components/SearchInput'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'


function Rooms() {
  return (
    <>
    <Navbar/>
    <div className='mt-5'><SearchInput/></div>
    <Roomcards/>
    <Footer/>
    </>
  )
}

export default Rooms