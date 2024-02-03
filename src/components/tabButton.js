import React from "react";

export default function TabButton({children,isSelected, ...props}){
    
    //event listeners
    // function handleClick(){
    //     // console.log("hello dear!");
    //     alert("hello dear");
    // }

    return (
        <ul>
           
           {/* //here the function should not follow paranthesis because the onclick should execute only after clicking the button */}
            <button className={isSelected? "active" : undefined} {...props}>{children}</button>
           
        </ul>

    );
}