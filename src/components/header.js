import React from "react";
import Card from "./card";
import stateImg from './assets/logo192.png';

 


const concept = ['Fundamental', 'Crucial', 'Core'];

function load(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description=concept[load(2)];
  return (
    <header>
             
            

      <img src={stateImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} react concepts that you need to learn 
      </p>
      
    </header>
  );
}