/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import React, { useState, useEffect } from 'react'; 
import SearchIcon from '@mui/icons-material/Search';
import "./css/searchBar.css";
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const SearchBar = ({ setResults }) => { 
    const [input, setInput] = useState(""); 
    const [age, setAge] = React.useState('');

    const [category, setCategory] = useState([]);
    useEffect(() => {
        const API_URL = 'http://127.0.0.1:8000/Allcategory/';
        axios.get(API_URL)
            .then(response => {
                setCategory(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching data:", error);
            });
    }, []);

// testing search with category





    const fetchData1 = (searchInput, selectedCategory) => {
        // Construct the API URL with category and search input as query parameters
        const API_URL = `http://127.0.0.1:8000/search/`;
        console.log(age)
        console.log(input)

        axios.get(API_URL, { params: { category: age, query: input } })
            .then((response) => {
                const assets = response.data;
                setResults(assets);
                console.log(assets)
            })
            .catch((error) => {
                console.error("There was an error fetching data:", error);
            });
    };


    const handleChange = (value) => {
        setInput(value);
        //fetchData(value);
        fetchData1(value,age);
    };




    const handleChanges = (event) => {
        setAge(event.target.value);
    };
    return (
        <Box sx={{ minWidth: '120', maxWidth: '99.5%' }}>



            <FormControl fullWidth style={{ backgroundColor: "white" }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChanges}
                >
                    {category.map((categoryItem, id) => (
                        <MenuItem key={id} value={id}>
                            {categoryItem.category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div className="inputTaker">
                <SearchIcon style={{ color: 'white' }} />
                <input placeholder="Search for Assets"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)} />{ /*make changes when there is an input*/}
            </div>
    </Box>
    );
}

export default SearchBar;

