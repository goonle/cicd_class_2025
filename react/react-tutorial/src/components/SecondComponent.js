import React, { useState } from 'react';

function SecondComponent(props) {

    const [ myAge, setMyAge ] = useState(32);
    const [ myName, setMyName ] = useState("Junhyung Huh");
    const [ message, setMessage ] = useState("");

    function getMessage(){
        if (myAge > 50) {
            setMessage("You are wise and experienced.");
        } else if (myAge > 30) {
            setMessage("You are mature.");
        } else if (myAge > 20) {
            setMessage("You are young and full of energy.");
        } else {
            setMessage("You are in the prime of your youth, Cherry boy.");
        }
    }
    function addAge(){
        setMyAge(myAge+1);
        setMessage("");
    }
    function emitAge(){
        setMyAge(myAge-1);
        setMessage("");
    }

    return (
        <div>
            <h1>
                Second Component. This is my name:
                <span>{!!props.my_name?props.my_name:myName}</span>
            </h1>
            <p>My age: <span>{!!props.my_age?props.my_age:myAge}</span></p>
            {!!message?<div>{message}</div>:null}
            <button onClick={addAge}>+</button>
            <button onClick={emitAge}>-</button>
            <button onClick={getMessage}>Get Message</button>
        </div>
    );
}

export default SecondComponent;