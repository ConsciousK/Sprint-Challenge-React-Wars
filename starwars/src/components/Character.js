import React from "react";
import './components.css';
function Character(props) {
    return (
        <div className="characterBox">
            <p className="characterItem">
                <h3>{props.character.name}</h3>
            </p>
            <p className="characterItem">
                <strong>Birth Year:</strong><span className="prop">{props.character.birth_year}</span>
            </p>
            <p className="characterItem">
                <strong>Eye Color:</strong> <span className="prop">{props.character.eye_color}</span>
            </p>
            <p className="characterItem">
                <strong>Gender:</strong><span className="prop">{props.character.gender}</span>
            </p>
        </div>
    );
}

export default Character;
