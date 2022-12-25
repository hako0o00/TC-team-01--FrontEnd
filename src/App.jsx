import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'
import Home from './Pages/Home'
import Anonces from './Pages/Anonces'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import UneAnonce from './Pages/UneAnonce'
import Ajouter from './Pages/Ajouter'
import Profile from './Pages/Profile'
import {MyProvider} from './utils/MyContext'
import { Route , Routes } from "react-router-dom"
import NavBar from './Components/NavBar'
function App() {


  return (
    <MyProvider>
    <Routes>
    <Route path = "/" element={<Anonces/>}></Route>
    <Route path = "/SignUp" element={<SignUp/>}></Route>
    <Route path = "/LogIn" element={<LogIn/>}></Route>
    <Route path = "/Ajouter" element={<Ajouter/>}></Route>
    <Route path = "/Profile" element={<Profile/>}></Route>
    <Route path = "/Anonces/:id" element={<UneAnonce/>}></Route>
    </Routes>
    </MyProvider>
  )
}

export default App
