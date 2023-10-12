import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
    const [assets, setAssets] = useState([]);
    const API_URL = 'http://127.0.0.1:8000/assets/';
    

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setAssets(response.data);
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    }, []);

    return (
        <div>
            <h1>Assets Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Asset ID</th>
                        <th>Category ID</th>
                        <th>Name</th>
                        <th>Mint State</th>
                        <th>Image URL</th>
                        <th>Price</th>
                        <th>Mint Price</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map(asset => (
                        <tr key={asset.Asset_ID}>
                            <td>{asset.Asset_ID}</td>
                            <td>{asset.category_ID}</td>
                            <td>{asset.Name}</td>
                            <td>{asset.Mint_state ? "Minted" : "Not Minted"}</td>
                            <td>{asset.Img_Url}</td>
                            <td>{asset.Price}</td>
                            <td>{asset.Mint_Price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Test;
