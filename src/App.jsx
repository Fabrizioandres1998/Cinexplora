import React from 'react'
import GetMovies from './components/Movies/GetMovies'
import NavbarBT from './components/Navbar/NavbarBT'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarBT />
        <Routes>
          <Route exact path='/' element={<GetMovies />} />
          
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
