 import React from 'react'
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Login from './login'
 import View from './View'
 export default function App() {
   return (
     <div>
    <BrowserRouter>
  
    <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/view" element={<View/>} />
          
    </Routes>

    </BrowserRouter>

     </div>
   )
 }
 