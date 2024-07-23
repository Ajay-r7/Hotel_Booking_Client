import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Rooms from './pages/Rooms'
import Booking from './pages/Booking'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'

function App() {

  return (
  <>
  <Routes>
  <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/booking' element={<Booking/>}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default App
