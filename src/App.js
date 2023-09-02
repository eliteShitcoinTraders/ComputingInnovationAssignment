import React from 'react';
// Imports the components from React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicGrid from './home.js';
import Product from './product';
import Purchase from './purchase';
import Profile from './profilepage';
//React Router was used to route the pages together.
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<BasicGrid />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/purchase" element={<Purchase/>}/>
                    <Route path="/profilepage" element={<Profile/>}/>
                </Routes>
            </Router>
        </div>
    );
}

//

export default App;
