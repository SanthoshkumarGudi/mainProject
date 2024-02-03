import React from "react";

export default function Tab({children, buttons,ButtonsContainer='menu'}){
    // let ButtonsContainer=buttonsContainer;

    return(
     <>
     <ButtonsContainer>{buttons}</ButtonsContainer> 
     
     {children}
     </>
    );
}