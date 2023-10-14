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
import Cart from './cartpage';
import { CartProvider } from './CartContext.js';

//React Router was used to route the pages together.
function App() {
    return (
        <div>
            <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<BasicGrid />} />
                    <Route path="/product" element={<Product/>} /> 
                    <Route path="/purchase" element={<Purchase/>}/>
                    <Route path="/profilepage" element={<Profile />} />
                    <Route path="/productListing" element={<ProductListing />} />
                    <Route path="/cartpage" element={<Cart/>} />
                    <Route path="/testing" element={<Test />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
            </CartProvider>
        </div>
    );
}

//

export default App;
