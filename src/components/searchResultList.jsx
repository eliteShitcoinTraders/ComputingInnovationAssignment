/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import React from 'react';
import "./css/searchResultList.css";
import SearchResult from "./searchResult.jsx"

const searchResultList = ({ result }) => {
    //print out a list person who matches the description

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