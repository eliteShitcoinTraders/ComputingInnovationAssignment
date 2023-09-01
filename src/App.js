import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from React Router
import BasicGrid from './home.js';
import Product from './product'; // Import the component for the product page


function App() {
    return (
        <div>
            <Router>  
                <Routes>
                    <Route path="/" element={<BasicGrid />} /> 
                    <Route path="/product" element={<Product />} /> 
                </Routes>
            </Router>
        </div>
    );
}


export default App;