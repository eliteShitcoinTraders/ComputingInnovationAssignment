import React, { useState } from 'react'; // Import useState from React
import SearchIcon from '@mui/icons-material/Search';
import "./css/searchBar.css";

const SearchBar = ({ setResults }) => { // Rename the component to start with an uppercase letter
    const [input, setInput] = useState(null); // Use useState instead of React.useState

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
