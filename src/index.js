import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Carrito from './pages/Carrito';
import Notfound from './pages/Notfound/Notfound';
import Home from './pages/Home/Home';

ReactDOM.render(

    
    <BrowserRouter>
      <Routes>

          <Route path='/' element={<App/>}>
            <Route index='/Home' element={<Home/>} />
            <Route  path='/Carrito' element={<Carrito/>} />
            <Route path='*' element={<Notfound/>} />
            
          </Route>
      </Routes>
    </BrowserRouter>,
  
  document.getElementById('root')
);

