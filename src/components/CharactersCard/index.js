import React from "react";
import "./style.css";

function CharactersCard(props) {
    return (
        <div className="container">
        <div className="card">
            <div className="img-container">
                <img
                key={props.id} 
                onClick={() => props.handleClick(props.id, props.clicked)} 
                src={props.image} 
                alt={props.name}
                id={props.name} />
            </div>
        </div>
        </div>
    );
}

export default CharactersCard;