import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Join from './Pages/Join';
import Create from './Pages/Create';
import Messages from './Pages/Messages';
import User from './Pages/User';
import {Route, Routes} from "react-router-dom"

function App() {

return (
<>
  <Navbar />
 
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Create" element={<Create />}/>
      <Route path="/Join" element={<Join />}/>
      <Route path="/Messages" element={<Messages />}/>
      <Route path="/User" element={<User />}/>
    </Routes>
  </div>

</>
  )
}

export default App;
