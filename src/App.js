import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/navbar'
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'
import { Home } from './pages/home';
import { Contact } from './pages/contact-us';
import { Footer } from './components/footer';
import { ShopContextProvider } from './context/shop-context';
import './App.css';
import './components/body.css';


function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
       </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
