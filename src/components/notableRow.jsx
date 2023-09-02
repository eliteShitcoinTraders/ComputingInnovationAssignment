import * as React from 'react';
import ScrollCard from './scrollCard.jsx';
import './css/notableRow.css';

const header = { headerOne: "Floor Price", headerTwo: "Volume" };

export default function ActionAreaCard({ cardinfo }) {
    return (
        <div className="notable-list">
            {
                cardinfo.map((cardinfo, id) => {
                    return <ScrollCard cardinfo={cardinfo} header={header} key={id} />;
                })
            }
        </div>
    );
}