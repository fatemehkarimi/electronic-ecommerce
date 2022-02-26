import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import ProductDetail from './productDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/product/:productId' element={ <ProductDetail /> } />
                <Route path='/' element={ <Home /> } />
            </Routes>
        </Router>
    );
}

export default App;