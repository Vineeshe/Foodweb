import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home';
import Sucess from './Pages/Sucess';
import NotFound from './Pages/NotFound';

const App = () => {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Sucess />} />
          <Route path='*' element={<NotFound />} />
        </Routes>



        <Toaster />
      </Router>


    </>

  )
}

export default App
