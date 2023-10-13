/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import React from 'react';
import SearchResult from "./searchResult.jsx"; // Import SearchResult from the correct path
import "./css/searchResultList.css";


const SearchResultList = ({ result }) => {
    return (
        <div className="result-list">
            {
                result.map((result, id) => {
                    return <SearchResult result={result} key={id} />;
                })
            }
        </div>
    );
}

export default SearchResultList;
