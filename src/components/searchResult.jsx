/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import React from 'react';
import "./css/searchResult.css";


const searchResult = ({ result }) => {
    //print out a person who matches the description
    return (
        <div className="resultColumn" onClick={ (e) => alert(`hovering`)}>
            {result.name}
        </div>
    );
}
export default searchResult;