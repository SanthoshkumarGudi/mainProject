import React from "react";

function Contacts({name,age,message}){
    return(
        <li>
            <h1>{name}</h1>
            <p>
                age is: {age}

            </p>
            <p>
                Message: {message}

            </p>

        </li>

    );
}

export default Contacts;