import React from 'react';
import About from './components/About';
import Login from './components/Login';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css'
import Contact from './components/Contact';
import { Footer } from './components/Fotter';
import Product from './components/Products';
import Form from './components/Form';
import Products2 from './components/Products2';



function App(){
  return(
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Products2/>} />
    <Route path="/about" element={<About/>}/>
     <Route path="/login" element={<Login/>} />
     <Route path="/contact" element={<Contact/>} />
    <Route path="/products" element={<Product/>}/>
    <Route path="/products2" element={<Products2/>}/>
    <Route path="/registration" element={<Form/>}/>
    
    </Routes>

    </BrowserRouter>
  
   
    </div>
  )
}

export default App
