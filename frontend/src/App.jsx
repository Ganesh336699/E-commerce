import React from 'react';

import { Route , Routes } from 'react-router-dom';

import Home from './pages/home';
import Orders from './pages/Orders';
import Login from './pages/login';
import Cart from './pages/cart';
import Product from './pages/product';
import Contact from './pages/contact';
import About from './pages/About';
import Collection from './pages/collection';
import PlaceOrder from './pages/placeOrder';
import Navbar from './components/Navbar';


const App = () => {

  return (
    
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw'>

      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product-order' element={<PlaceOrder/>}/>
          <Route path='/orders' element={<Orders/>}/>

      </Routes>
    </div>
  )
}

export default App;