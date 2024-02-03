import { useState } from "react";
import React from "react";

export default function Player({initialName,symbol,isActive}){
   let [playerName,setPlayerName] =useState(initialName);

    let [isEditing, setIsEditing] =useState(false);

function handleEditClick(){
  // setIsEditing(isEditing? false : true);
  //it can be written like this also for only boolean value
  //setIsEditing(!isEditing); writing this code is not the best practice beacuase we will not get the latest value here
  setIsEditing(editing=>!editing);
}
 
function handleChange(event){
  console.log(event);
  setPlayerName(event.target.value);

}

let editablePlayerName=<span className="player-name">{playerName}</span>;

if(isEditing){
    editablePlayerName=<input type="text" required value={playerName} onChange={handleChange}/>
}
return(
        <li className={isActive ? 'active' :undefined}>
        <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing? 'save' : 'edit'}</button>
        </span>
        
      </li>
    )
}