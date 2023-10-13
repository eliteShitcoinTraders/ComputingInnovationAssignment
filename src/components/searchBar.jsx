/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import React, { useState } from 'react'; 
import SearchIcon from '@mui/icons-material/Search';
import "./css/searchBar.css";
import axios from "axios";

const SearchBar = ({ setResults }) => { 
    const [input, setInput] = useState(""); 

    const fetchData = (value) => {
        axios.get('http://127.0.0.1:8000/assets')
          .then((response) => {
            const assets = response.data; 
            const results = assets.filter((asset) => {
              return (
                value &&// see if there is a vlue in the seach box
                asset &&// see if it is a user
                asset.Name && // see if it is a user name
                asset.Name.toLowerCase().includes(value.toLowerCase()) //to lower
              );
            });
         
            setResults(results);
          })
      };
      

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="inputTaker">
            <SearchIcon style={{ color: 'white' }} />
            <input placeholder="Search for Assets"
                value={input}
                onChange={(e) => handleChange(e.target.value)} />{ /*make changes when there is an input*/}
        </div>
    );
}

export default SearchBar;

