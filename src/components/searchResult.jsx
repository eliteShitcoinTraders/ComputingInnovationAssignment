/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import React from 'react';
import "./css/searchResult.css";
import ScrollCard from './scrollCard.jsx';

const searchResult = ({ result }) => {
    //print out a person who matches the description
    return (

        <div className="resultColumn">
            <ScrollCard cardinfo={result} header={result.Asset_ID} key={result.Price} />
        </div>

    );
}
export default searchResult;