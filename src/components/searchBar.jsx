import React, { useState } from 'react'; 
import SearchIcon from '@mui/icons-material/Search';
import "./css/searchBar.css";

const SearchBar = ({ setResults }) => { 
    const [input, setInput] = useState(null); 

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    );
            });
        setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="inputTaker">
            <SearchIcon style={{ color: 'white' }} />
            <input placeholder="Search Items, Collections, and Accounts"
                value={input}
                onChange={(e) => handleChange(e.target.value)} />
        </div>
    );
}

export default SearchBar;
