import React from 'react'
import "./App.css" ;
import "./Responsive.css" ;
import Header from './Component/Header'
import Footer from './Component/Footer';
import {Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import {Contact} from './page/Contact';
import MenuDetails from './page/menu/MenuDetails';
import Brand from './Sunday/Brand';

function App() {
  return (
    <>
    <Header/>
    

    <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/details/:menu_id' element={<MenuDetails/>}/>
        <Route path='/brand' element={<Brand/>}/>
    </Routes>



    <Footer/>
    
    </>
  )
}

export default App