

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from "react";
import './App.css';
import Header from './pages/Header';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
      <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser}/>
      <Homepage logoutUser={logoutUser} />
        <Routes>
          <Route path="/login" element={<Login setLogoutUser={setLogoutUser} />}></Route>
          <Route path="/register" element={<Register setLogoutUser={setLogoutUser} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
