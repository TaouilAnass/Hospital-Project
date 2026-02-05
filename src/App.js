import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services';
import About from './components/About';
import Doctors from './components/Doctors';
import Book from './components/Book';
import Review from './components/Review';
import Blogs from './components/Blogs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomeLogin from './components/HomeLogin';
import Navigator from './components/Navigator'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<><Header/><Home/></>}/>
        <Route  path='Services/:username' element={<><Services/></>}/>
        <Route  path='About/:username' element={<><About/></>}/>
        <Route  path='Doctors/:username' element={<><Doctors/></>}/>
        <Route  path='Book/:username' element={<><Book/></>}/>
        <Route  path='Review/:username' element={<><Review/></>}/>
        <Route  path='Blogs/:username' element={<><Blogs/></>}/>
        <Route  path='Login' element={<><Login/></>}/>
        <Route  path='SignUp' element={<><SignUp/></>}/>
        <Route  path='HomeLogin/:username' element={<><HomeLogin/></>}/>
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
