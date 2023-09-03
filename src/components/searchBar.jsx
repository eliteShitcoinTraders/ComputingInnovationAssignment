/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import React, { useState } from 'react'; 
import SearchIcon from '@mui/icons-material/Search';
import "./css/searchBar.css";

const SearchBar = ({ setResults }) => { 
    const [input, setInput] = useState(null); 

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")//getting dumy data from jsonholder for our search bar
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value &&// see if there is a vlue in the seach box
                        user &&// see if it is a user
                        user.name &&// see if it is a user name
                        user.name.toLowerCase().includes(value)//compares the name and see if matches
                    );
            });
        setResults(results);//send out result
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
                onChange={(e) => handleChange(e.target.value)} />{ /*make changes when there is an input*/}
        </div>
    );
}

export default SearchBar;
