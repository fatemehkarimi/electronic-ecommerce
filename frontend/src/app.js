import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './productDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/product/:productId' element={ <ProductDetail /> } />
            </Routes>
        </Router>
    );
}

export default App;