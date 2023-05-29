import React from "react";


// Code Keypad Component Here
function log(){
    console.log("Entering password...");
}

function Keypad (){
    return (
        <div>
            <input onChange={log} type="password"></input>
        </div>
    )
}

export default Keypad;