import React from "react";

function Card(props){
    return(
       <li className="box">
        <img src={props.img} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
       </li>
    );
}

export default Card;