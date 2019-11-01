import React from "react";
import "./style.css";

function CharactersCard(props) {
    return (
        <div className="container">
        <div className="card">
            <div className="img-container">
                <img onClick={props.onClick} src={props.image} alt={props.name} />
            </div>
        </div>
        </div>
    );
}

export default CharactersCard;