import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from React Router
import BasicGrid from './home.js';
import Product from './product'; // Import the component for the product page
import Purchase from './purchase';
//import Profile from './profilepage';

function App() {
    return (
        <div>
            <Router>  
                <Routes>
                    <Route path="/" element={<BasicGrid />} /> 
                    <Route path="/product" element={<Product />} /> 
                    <Route path="/purchase" element={<Purchase/>}/>
                    
                </Routes>
            </Router>
        </div>
    );
}

//<Route path="/profilepage" element={<Profile/>}/> -- route to profile page

export default App;