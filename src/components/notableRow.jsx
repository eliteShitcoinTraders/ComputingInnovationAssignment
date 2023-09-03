/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import * as React from 'react';
import ScrollCard from './scrollCard.jsx';
import './css/notableRow.css';

const header = { headerOne: "Floor Price", headerTwo: "Volume" };

export default function ActionAreaCard({ cardinfo }) {
    //function will returns the row that we use for the main page to display the collections
    return (
        <div className="notable-list">
            {
                cardinfo.map((cardinfo, id) => {
                    // almost act like a while loop and print the card out one by one in our array
                    return <ScrollCard cardinfo={cardinfo} header={header} key={id} />;
                })
            }
        </div>
    );
}