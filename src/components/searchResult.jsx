import React, { useState } from 'react';
import "./css/searchResult.css";


const searchResult = ({ result }) => {
    return (
        <div className="resultColumn" onClick={ (e) => alert(`hovering`)}>
            {result.name}
        </div>
    );
}
export default searchResult;