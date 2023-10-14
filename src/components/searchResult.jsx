/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import React from 'react';
import './css/searchResult.css';
import ScrollCard from './scrollCard.jsx';

const SearchResult = ({ result }) => {


  return (
    <div className="resultColumn">
      

      <div className="resultRow">
      <ScrollCard cardinfo={result} header={result.Asset_ID} key={result.Asset_ID} />
      </div>

      <div className="resultRow" onClick={(e) => alert(`Clicked!`)}>
        {result.name}
      </div>
    </div>
  );
};

export default SearchResult;

