import * as React from 'react';
import ScrollCard from './scrollCard.jsx';
import './css/notableRow.css';



export default function ActionAreaCard({ cardinfo }) {
    return (
        <div className="notable-list">
            {
                cardinfo.map((cardinfo, id) => {
                    return <ScrollCard cardinfo={cardinfo} key={id} />;
                })
            }
        </div>
    );
}