/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import React from 'react';
import "./css/searchResult.css";


const searchResult = ({ result }) => {
    //print out a person who matches the description

    console.log(result);
    return (
<<<<<<< HEAD

        <div className="resultColumn">
            <ScrollCard cardinfo={result} header={result.Asset_ID} key={result.Asset_ID} />
=======
        <div className="resultColumn" onClick={ (e) => alert(`hovering`)}>
            {result.name}
>>>>>>> parent of 972bd55 (Big search bar and mini QOL changes)
        </div>
    );
}
export default searchResult;