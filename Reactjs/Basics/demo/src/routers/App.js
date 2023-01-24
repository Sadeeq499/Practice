import React from 'react'
import Home  from './home'
import {BrowserRouter as Router , Route , Routes ,Link } from 'react-router-dom'
import Product from './product'
import List from './list'
import Error from './error'
import Products from './Products'
export default function App() {
  return (
    <div>
        <Router>
            <Link to="/">Home</Link>
            <Link to="/list">List</Link>
            <Link to="/product">Product</Link>
            <Link to="/products">Products</Link>
            <Routes>
                <Route   path='/' element={<Home />} />
                <Route   path="/product" element={<Product />} />
                <Route   path='/list' element={<List />} />
                <Route   path='/products/:id' element={<Products />} />
                <Route   path='*' element={<Error />} />
            </Routes>
        </Router>
    </div>
  )
}
