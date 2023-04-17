import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import Offers from './Components/Offers/Offers'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Blog from './Components/Blog/Blog'


function App() {

  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Popular/>
     <Offers/>
     <About/>
     {/* <Footer/> */}
     <Blog/>
    </div>
  )
}

export default App
