import React from "react";
import Header from "./components/Header1";
import UserInput from "./components/userInput";
import { useState } from "react";
import Results from "./components/Results";



export default function App2(){

    const [userInput, setUserInput]= useState({initialInvestment:1000,
    annualInvestment:12,
    expectedReturn:6,
    duration:10,
    });

    function handleChange(inputIdentifier, newValue){
    
        setUserInput(prevUserInput =>{
            console.log(prevUserInput)
            console.log(inputIdentifier);
            console.log(newValue);
            return {
                ...prevUserInput,
                [inputIdentifier]:newValue
            };
        });
    }

    return(
        <>
        <Header/>
        <UserInput userInput={userInput} onChange={handleChange}/>
        <Results input={userInput} />

        </>
    )
}