
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Login from './pages/Login';

function Navingationbar (){
  
    return (
      <>
        <div>
          <h2>Welcome to Online Purchase</h2>
         
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='Row'>
                <div className='row'><Link to={'/'} > Home </Link></div>
                <div className='Column'><Link to={'/contact'} >Contactus</Link></div>
                <div className='Column'><Link to={'/about'} >About</Link></div>
                <div className='Column'><Link to={'/login'} >Login</Link></div>
            </div>        
          </nav>
          <hr />
          <Routes>
              <Route exact path='/'  element={<Homepage />}  />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </>
    );
  }


export default Navingationbar;