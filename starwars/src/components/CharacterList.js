import React from "react";
import Character from "./Character";
import './components.css';
function CharacterList(props) {
  return (
    <div>
      {props.characters.map(item => {
        return (
          <Character
            character={item}
          />
        );
      })}
    </div>
  );
}

export default CharacterList;