import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Products from './Products';
import { Routes, Route } from 'react-router-dom';
import Detail from './Detail';
import Cart from './Cart';
import Checkout from './Checkout';

export default function App() {
  // function addToCart(id, sku) {
  //   setCart((items) => {
  //     const itemInCart = items.find((i) => i.sku === sku);
  //     if (itemInCart) {
  //       //return new array with the matching item replaced
  //       return items.map((i) =>
  //         setCart.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
  //       );
  //     } else {
  //       // return new array with the new item appended
  //       return [...items, { id, sku, quantity: 1 }];
  //     }
  //   });
  // }

  // function updateQuantity(sku, quantity) {
  //   setCart((items) => {
  //     if (quantity === 0) {
  //       return items.filter((i) => i.sku !== sku);
  //     }
  //     return items.map((i) => (i.sku === sku ? { ...i, quantity } : i));
  //   });
  // }

  // function emptyCart() {
  //   setCart([]);
  // }

  return (
    <>
      <div className='content'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path='/:category' element={<Products />} />
            <Route path='/:category/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
