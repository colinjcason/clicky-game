import React from "react";
import "./style.css";

function NavBar(props) {    
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-nav mr-auto mt-2 mt-lg-0">
            <ul>
                <li className="navbar-brand">{props.name}</li>
                <li>Click to get started!</li>
                <li>Score:  | Top Score: </li>
            </ul>
            </div>
        </nav>
    );
}

export default NavBar;