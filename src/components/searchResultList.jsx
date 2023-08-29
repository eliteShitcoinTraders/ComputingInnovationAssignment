import React from 'react';
import "./css/searchResultList.css";
import SearchResult from "./searchResult.jsx"

const searchResultList = ({ result}) => {
    return (
        <div className="result-list">
            {
                result.map((result,id) =>{
                    return <SearchResult result={result} key={ id } />;
            })
            }
        </div>
    );
}
export default searchResultList;