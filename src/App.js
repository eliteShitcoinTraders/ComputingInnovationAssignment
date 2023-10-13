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


//React Router was used to route the pages together.
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<BasicGrid />} />
                    <Route path="/product/:Asset_ID" element={<Product/>} /> {/*Using dynamically changing Asset_ID*/}
                    <Route path="/purchase" element={<Purchase/>}/>
                    <Route path="/profilepage" element={<Profile />} />
                    <Route path="/productListing" element={<ProductListing />} />
                    <Route path="/testing" element={<Test />} />

                </Routes>
            </Router>
        </div>
    );
}

//

export default App;
