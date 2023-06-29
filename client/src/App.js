import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import LogIn from './components/login/LogIn'
import SignUp from './components/signup/SignUp'
import Tutorial from './components/Tutorial/Tutorial'
import SpinnerFetch from './components/spinner/SpinnerFetch'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<LogIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/tutorial' element={<Tutorial/>}/>
      <Route path='/spinner' element={<SpinnerFetch />}/>
    </Routes> 
    </BrowserRouter>
  )
}

export default App
