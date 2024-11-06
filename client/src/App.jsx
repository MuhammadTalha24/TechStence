import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import { Toaster } from 'react-hot-toast';
import Logout from './pages/Logout'



import './App.scss'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  )
}

export default App