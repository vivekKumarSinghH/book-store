import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Signup from './components/Signup'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from 'react-router'
import Login from './components/Login'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/features/authSlice'
import AddBook from './components/AddBook'
import Home from './components/Home'

function App() {
  const dispatch=useDispatch()

  const user=JSON.parse(localStorage.getItem("profile"))
 
  useEffect(() => {
  
    dispatch(setUser(user))
  
  
  }, [])
  return (
    <div className="App">
 
     <Header />
     <ToastContainer/>
     <Routes>
     
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/addbook" element={<AddBook/>}/>
     <Route path="/" element={<Home/>}/>
     
     </Routes>
    
    </div>
  )
}

export default App
