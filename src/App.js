import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import prod from './components/Products';
import Accessories from './components/Accessories';
import { Electronics } from './components/Electronics';
import Navmenu from './components/Navbar';
import Cart from './screens/cart';
import { Route, Routes } from 'react-router-dom';
import DetailState from './conexts/detailstate';
import Detsrc from './screens/detsrcs';
import CartProd from './conexts/cartprods';
import CartBtn from './conexts/cartbtn';


function App() {
  return (
    <div>
    <CartBtn> 
      <CartProd>
      <DetailState>
      <Navmenu />
      <Routes>
        <Route path='/' element={[<Electronics/>,<Accessories/>] }></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/detsrc' element={<Detsrc/>}></Route>
      </Routes>
      </DetailState>
      </CartProd>
      </CartBtn>

    </div>
  )
}

export default App;
