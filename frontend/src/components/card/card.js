import React from 'react';
import "./card.css";


function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={ props.image } alt="image" />
            </div>
            <div className="card-container">
                { props.children }
            </div>
        </div>
    );
}

export default Card;