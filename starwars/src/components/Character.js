import React from "react";
import './components.css';
function Character(props) {
  return (
    <div className="characterBox">
      <p className="characterItem">Name: {props.character.name}</p>
      <p className="characterItem">Birth Year:{props.character.birth_year}</p>
      <p className="characterItem">Eye Color: {props.character.eye_color}</p>
      <p className="characterItem">Gender: {props.character.gender}</p>
    </div>
  );
}

export default Character;
