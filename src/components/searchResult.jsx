/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import React from 'react';
import './css/searchResult.css';
import ScrollCard from './ScrollCard';

const SearchResult = ({ result }) => {

  console.log(result);

  return (
    <div className="resultColumn">
      <ScrollCard cardinfo={result} header={result.Asset_ID} key={result.Asset_ID} />

      <div className="resultRow" onClick={(e) => alert(`Clicked!`)}>
        {result.name}
        (Big search bar and mini QOL changes)
      </div>

      <div className="resultRow" onClick={(e) => alert(`Clicked!`)}>
        {result.name}
      </div>
    </div>
  );
};

export default SearchResult;

