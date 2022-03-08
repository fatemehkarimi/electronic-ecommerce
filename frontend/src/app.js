import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import CategoryProductList from './categoryProductList/categoryProductList';
import ProductDetail from './productDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/product/:productId' element={ <ProductDetail /> } />
                <Route path='/category/:categoryName/:categoryId' element={ <CategoryProductList /> } />
            </Routes>
        </Router>
    );
}

export default App;