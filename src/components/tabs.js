import React from "react";

export default function Tab({children, buttons}){
    // let ButtonsContainer=buttonsContainer;

    return(
     <>
     <menu>{buttons}</menu> 
     
     {children}
     </>
    );
}
