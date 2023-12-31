/*student ID:104266437
    name: Rino Quijote
    group: g-99
*/
import React from 'react';
// Imports the components from React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicGrid from './home.js';
import Product from './product';
import Purchase from './purchase';
import Profile from './profilepage';
import ProductListing from './productListing';
import Test from './test';
import Login from './login';


//React Router was used to route the pages together.
function App() {
    return (
        <div>
            
            <Router>
                <Routes>
                    <Route path="/" element={<BasicGrid />} />
                    <Route path="/product/:assetID" element={<Product />} />
                    <Route path="/purchase" element={<Purchase/>}/>
                    <Route path="/profilepage" element={<Profile />} />
                    <Route path="/productListing" element={<ProductListing />} />
                    <Route path="/testing" element={<Test />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
            
        </div>
    );
}

//

export default App;
