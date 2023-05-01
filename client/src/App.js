import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import LogIn from './components/login/LogIn'
import SignUp from './components/signup/SignUp'
import Tutorial from './components/Tutorial/Tutorial'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/tutorial' element={<Tutorial/>}/>
    </Routes> 
    </BrowserRouter>
  )
}

export default App
