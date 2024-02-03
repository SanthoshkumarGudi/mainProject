import React from "react";
import logo from './logo.svg';
import Player from "./components/player";
import { Gameboard } from "./components/gameboard";
import { useState } from "react";




function App1(){

  const [activePlayer, setActivePlayer] =useState('X');

  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((curActivePlayer)=>curActivePlayer==='X' ? 'O' : 'X');
    

     
    

  }
    return(
        <>
         <main>
     <div id="game-container">
       <ol id="players" className="highlight-player">
         <Player initialName="player 1" symbol=" X" isActive={activePlayer==='X'}/>
         <Player initialName="player 2" symbol=" O" isActive={activePlayer==='O'}/>
       </ol>
         <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
         </div>
         Log
         </main>
        </>
    )
}

export default App1;